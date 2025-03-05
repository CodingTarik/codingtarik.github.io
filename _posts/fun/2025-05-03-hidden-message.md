---
title: Emoji Nachricht Kodierer
description: Verstecke deine Nachricht in Emojis!
date: 2025-03-06T10:00:00.000Z
tags:
  - emoji
  - coding
  - verschlüsselung
categories:
  - tools
  - web
---

<div class="emoji-container">
    <h1>Verstecke Nachrichten in Emojis</h1>

    <label for="encodeInput">Gib deine Nachricht ein:</label>
    <textarea id="encodeInput" placeholder="Gib hier deine Nachricht ein"></textarea>

    <div class="emoji-picker">
        <span onclick="setEmoji('😀')">😀</span>
        <span onclick="setEmoji('😎')">😎</span>
        <span onclick="setEmoji('😍')">😍</span>
        <span onclick="setEmoji('👍')">👍</span>
        <span onclick="setEmoji('💥')">💥</span>
        <span onclick="setEmoji('🎉')">🎉</span>
        <span onclick="setEmoji('💬')">💬</span>
        <span onclick="setEmoji('🌟')">🌟</span>
    </div>

    <button onclick="encodeMessage()">Kodieren</button>

    <h2>Versteckte Emoji-Nachricht:</h2>
    <p id="encodedMessage" class="encoded-output"></p>

    <label for="decodeInput">Füge deine Emoji-Nachricht hier ein:</label>
    <textarea id="decodeInput" placeholder="Füge hier deine versteckte Emoji-Nachricht ein"></textarea>
    <button onclick="decodeMessage()">Dekodieren</button>

    <h2>Dekodierte Nachricht:</h2>
    <p id="decodedMessage" class="decoded-output"></p>
</div>

<script>
    const VARIATION_SELECTOR_START = 0xfe00;
    const VARIATION_SELECTOR_END = 0xfe0f;
    const VARIATION_SELECTOR_SUPPLEMENT_START = 0xe0100;
    const VARIATION_SELECTOR_SUPPLEMENT_END = 0xe01ef;

    function toVariationSelector(byte) {
        if (byte >= 0 && byte < 16) {
            return String.fromCodePoint(VARIATION_SELECTOR_START + byte);
        } else if (byte >= 16 && byte < 256) {
            return String.fromCodePoint(VARIATION_SELECTOR_SUPPLEMENT_START + byte - 16);
        } else {
            return null;
        }
    }

    function fromVariationSelector(codePoint) {
        if (codePoint >= VARIATION_SELECTOR_START && codePoint <= VARIATION_SELECTOR_END) {
            return codePoint - VARIATION_SELECTOR_START;
        } else if (codePoint >= VARIATION_SELECTOR_SUPPLEMENT_START && codePoint <= VARIATION_SELECTOR_SUPPLEMENT_END) {
            return codePoint - VARIATION_SELECTOR_SUPPLEMENT_START + 16;
        } else {
            return null;
        }
    }

    function encode(emoji, text) {
        const bytes = new TextEncoder().encode(text);
        let encoded = emoji;

        for (const byte of bytes) {
            encoded += toVariationSelector(byte);
        }

        return encoded;
    }

    function decode(text) {
        let decoded = [];
        const chars = Array.from(text);

        for (const char of chars) {
            const byte = fromVariationSelector(char.codePointAt(0));

            if (byte === null && decoded.length > 0) {
                break;
            } else if (byte === null) {
                continue;
            }

            decoded.push(byte);
        }

        let decodedArray = new Uint8Array(decoded);
        return new TextDecoder().decode(decodedArray);
    }

    function encodeMessage() {
        const inputMessage = document.getElementById("encodeInput").value;
        const selectedEmoji = window.selectedEmoji || '😀';
        const encodedMessage = encode(selectedEmoji, inputMessage);
        document.getElementById("encodedMessage").textContent = encodedMessage;
    }

    function decodeMessage() {
        const inputMessage = document.getElementById("decodeInput").value;
        const decodedMessage = decode(inputMessage);
        document.getElementById("decodedMessage").textContent = decodedMessage;
    }

    function setEmoji(emoji) {
        window.selectedEmoji = emoji;
    }
</script>

<style>
    /* Styles nur für diesen Blog-Post */
    .emoji-container {
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        color: white;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: 700;
    }

    h2 {
        font-size: 1.8rem;
        margin-top: 40px;
    }

    textarea {
        width: 100%;
        height: 120px;
        padding: 10px;
        margin-top: 10px;
        font-size: 1rem;
        border-radius: 10px;
        border: 2px solid #ddd;
        background: #222;
        color: #fff;
        resize: none;
        font-family: 'Roboto', sans-serif;
    }

    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        margin-top: 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #45a049;
    }

    .emoji-picker {
        margin-top: 20px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .emoji-picker span {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .emoji-picker span:hover {
        transform: scale(1.2);
    }

    .encoded-output {
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        margin-top: 20px;
        font-size: 1.2rem;
        border-radius: 10px;
        word-wrap: break-word;
    }

    .decoded-output {
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        margin-top: 20px;
        font-size: 1.2rem;
        border-radius: 10px;
    }
</style>
