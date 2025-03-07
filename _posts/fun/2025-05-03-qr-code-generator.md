---
title: QR Code Generator
description: Generate QR codes for URLs, Text, WiFi, and vCards.
date: 2025-03-06T2:02:00.000Z
tags:
  - tools
  - technology
  - qr-codes
categories:
  - utilities
  - web
math: false
---

# QR Code Generator

Create and download QR codes for various uses such as URLs, plain text, WiFi credentials, and even vCards.

## Generate Your QR Code

Enter the content you want to encode and select the type of QR code:

<form id="qrForm">
  <label for="qrInput">Content:</label>
  <input type="text" id="qrInput" placeholder="Enter URL, Text, WiFi credentials, or vCard info" required>
  
  <label for="qrType">QR Code Type:</label>
  <select id="qrType">
    <option value="url">URL</option>
    <option value="text">Text</option>
    <option value="wifi">WiFi</option>
    <option value="vcard">vCard</option>
  </select>
  
  <button type="submit">Generate QR Code</button>
</form>

<div id="qrCodeContainer" style="margin-top: 20px;">
  <h2>Your QR Code:</h2>
  <div id="qrCodeOutput"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script>
  $(document).ready(function() {
    $('#qrForm').submit(function(event) {
      event.preventDefault();
      
      var content = $('#qrInput').val();
      var type = $('#qrType').val();
      
      // Check if content is empty
      if (!content) {
        alert('Please enter some content to generate the QR code.');
        return;
      }
      
      // Generate QR Code based on selected type
      var qrCode;
      if (type === 'wifi') {
        // WiFi QR Code format: WIFI:T:WPA;S:<SSID>;P:<password>;;
        var ssid = prompt("Enter your WiFi SSID");
        var password = prompt("Enter your WiFi password");
        content = `WIFI:T:WPA;S:${ssid};P:${password};;`;
      } else if (type === 'vcard') {
        // vCard format (simplified)
        var name = prompt("Enter name (e.g., John Doe)");
        var email = prompt("Enter email address (e.g., johndoe@example.com)");
        content = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:${email}\nEND:VCARD`;
      }
      
      // Clear previous QR Code
      $('#qrCodeOutput').empty();
      
      // Create QR Code
      qrCode = new QRCode(document.getElementById('qrCodeOutput'), {
        text: content,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    });
  });
</script>

<style>
  #qrForm {
    text-align: center;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  #qrForm input, #qrForm select {
    padding: 10px;
    margin: 10px 0;
    width: 80%;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  #qrForm button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #qrForm button:hover {
    background-color: #45a049;
  }

  #qrCodeContainer {
    text-align: center;
  }

  #qrCodeOutput {
    margin-top: 20px;
    display: inline-block;
  }
</style>
