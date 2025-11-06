import { useGitHub } from './useGitHub';
import { Base64 } from 'js-base64';
import adminConfig from '../config';

export function useGitHubCommit() {
  const { token, user } = useGitHub();

  const REPO_OWNER = adminConfig.github.owner;
  const REPO_NAME = adminConfig.github.repo;
  const BRANCH = adminConfig.github.branch;

  /**
   * Commit a file to GitHub
   */
  const commitPost = async (filePath, content, action = 'Create') => {
    if (!token) {
      throw new Error('Not authenticated');
    }

    try {
      // Step 1: Check if file exists (for updates)
      let sha = null;
      try {
        const checkResponse = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (checkResponse.ok) {
          const fileData = await checkResponse.json();
          sha = fileData.sha;
        }
      } catch (error) {
        // File doesn't exist, which is fine for new posts
        console.log('File does not exist yet, creating new file');
      }

      // Step 2: Commit the file
      const commitData = {
        message: `${action} blog post via Admin Panel`,
        content: Base64.encode(content),
        branch: BRANCH,
        ...(sha && { sha }), // Include SHA if updating existing file
      };

      const response = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commitData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to commit file');
      }

      const result = await response.json();
      console.log('File committed successfully:', result);
      return result;
    } catch (error) {
      console.error('Error committing to GitHub:', error);
      throw error;
    }
  };

  /**
   * Delete a file from GitHub
   */
  const deletePost = async (filePath) => {
    if (!token) {
      throw new Error('Not authenticated');
    }

    try {
      // Get file SHA
      const checkResponse = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (!checkResponse.ok) {
        throw new Error('File not found');
      }

      const fileData = await checkResponse.json();

      // Delete the file
      const response = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Delete blog post via Admin Panel',
            sha: fileData.sha,
            branch: BRANCH,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete file');
      }

      return await response.json();
    } catch (error) {
      console.error('Error deleting from GitHub:', error);
      throw error;
    }
  };

  return {
    commitPost,
    deletePost,
  };
}

