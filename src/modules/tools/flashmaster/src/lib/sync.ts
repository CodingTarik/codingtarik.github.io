/**
 * Sync Module
 * Supports:
 * 1. Manual JSON export/import (download/upload)
 * 2. File System Access API for iCloud/Drive folder sync
 * 3. Automatic periodic sync to file
 */

import { saveAs } from 'file-saver';
import { exportAllData, importAllData } from './anki';
import type { SyncData } from '../types';

const SYNC_FILENAME = 'flashmaster-sync.json';

// ── Manual Export/Import ──

export async function downloadBackup(): Promise<void> {
  const data = await exportAllData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  saveAs(blob, `flashmaster-backup-${new Date().toISOString().slice(0, 10)}.json`);
}

export async function uploadBackup(file: File, merge: boolean = true): Promise<void> {
  const text = await file.text();
  const data: SyncData = JSON.parse(text);

  if (!data.version || !data.decks || !data.cards) {
    throw new Error('Invalid backup file format');
  }

  await importAllData(data, merge);
}

// ── File System Access API (for iCloud/Drive sync) ──

let syncDirectoryHandle: FileSystemDirectoryHandle | null = null;

export function isFSAccessSupported(): boolean {
  return 'showDirectoryPicker' in window;
}

export async function selectSyncFolder(): Promise<string> {
  if (!isFSAccessSupported()) {
    throw new Error('File System Access API not supported in this browser');
  }

  syncDirectoryHandle = await (window as any).showDirectoryPicker({
    mode: 'readwrite',
    startIn: 'documents',
  });

  return syncDirectoryHandle!.name;
}

export async function syncToFolder(): Promise<void> {
  if (!syncDirectoryHandle) {
    throw new Error('No sync folder selected. Please select a sync folder first.');
  }

  const data = await exportAllData();
  const json = JSON.stringify(data, null, 2);

  const fileHandle = await syncDirectoryHandle.getFileHandle(SYNC_FILENAME, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(json);
  await writable.close();
}

export async function syncFromFolder(): Promise<boolean> {
  if (!syncDirectoryHandle) {
    throw new Error('No sync folder selected. Please select a sync folder first.');
  }

  try {
    const fileHandle = await syncDirectoryHandle.getFileHandle(SYNC_FILENAME);
    const file = await fileHandle.getFile();
    const text = await file.text();
    const data: SyncData = JSON.parse(text);

    if (!data.version || !data.decks) {
      throw new Error('Invalid sync file');
    }

    // Only import if remote data is newer
    const localData = await exportAllData();
    if (data.exportedAt > localData.exportedAt) {
      await importAllData(data, true);
      return true; // Imported new data
    }

    return false; // Local data is newer
  } catch (err: any) {
    if (err.name === 'NotFoundError') {
      // No sync file exists yet, push local data
      await syncToFolder();
      return false;
    }
    throw err;
  }
}

export async function performSync(): Promise<'pushed' | 'pulled' | 'up-to-date'> {
  if (!syncDirectoryHandle) {
    throw new Error('No sync folder selected');
  }

  const pulled = await syncFromFolder();
  if (pulled) return 'pulled';

  await syncToFolder();
  return 'pushed';
}
