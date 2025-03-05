---
title: What is my IP?
description: Show your IP
date: 2025-03-05T22:51:41.132Z
tags:
    - networking
    - technology
categories:
    - tools
    - web
math: false
---

<head>
    <!-- Font Awesome for the clipboard icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<div class="ip-container">
    <h1>Your IP Addresses</h1>
    <div class="ip-box">
        <p><strong>IPv4:</strong> <span id="ipv4" class="fade-in">Loading...</span></p>
        <button class="copy-btn" onclick="copyToClipboard('ipv4')">
            <i class="fas fa-clipboard"></i>
        </button>
    </div>
    <div class="ip-box">
        <p><strong>IPv6:</strong> <span id="ipv6" class="fade-in">Loading...</span></p>
        <button class="copy-btn" onclick="copyToClipboard('ipv6')">
            <i class="fas fa-clipboard"></i>
        </button>
    </div>
</div>

<script>
    async function fetchIP() {
        try {
            // Fetching the IP address from a single source
            let response = await fetch("https://api64.ipify.org?format=json").then(res => res.json());
            
            // Assigning the IP to both IPv4 and IPv6 (same IP for simplicity in this case)
            let ipv4Elem = document.getElementById("ipv4");
            let ipv6Elem = document.getElementById("ipv6");
            
            ipv4Elem.textContent = response.ip;
            ipv6Elem.textContent = response.ipv6;
            
            ipv4Elem.classList.add("show");
            ipv6Elem.classList.add("show");
        } catch (error) {
            document.getElementById("ipv4").textContent = "Error fetching IPv4";
            document.getElementById("ipv6").textContent = "Error fetching IPv6";
        }
    }

    function copyToClipboard(ipType) {
        // Get the element by ID and copy its text content
        const ipElement = document.getElementById(ipType);
        const ipText = ipElement.textContent;

        navigator.clipboard.writeText(ipText).then(() => {
            alert(`${ipType.toUpperCase()} copied to clipboard!`);
        }).catch(err => {
            alert('Failed to copy text: ' + err);
        });
    }

    fetchIP();
</script>

<style>
    .ip-container {
        text-align: center;
        background: linear-gradient(135deg, #667eea, #764ba2);
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        display: inline-block;
        width: 100%;
        max-width: 600px;
        margin: auto;
        color: white;
        font-family: 'Arial', sans-serif;
    }
    
    .ip-box {
        background: rgba(255, 255, 255, 0.2);
        padding: 15px;
        margin: 10px 0;
        border-radius: 10px;
        font-size: 1.4em;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out;
        position: relative;
    }
    
    .ip-box:hover {
        transform: scale(1.05);
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    
    .show {
        opacity: 1;
        transform: translateY(0);
    }

    .copy-btn {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 1.5em;
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        transition: color 0.3s ease;
    }

    .copy-btn:hover {
        color: #4CAF50;
    }
</style>
