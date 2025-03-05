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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <script>
        async function fetchIP() {
            try {
                let ipv4 = await fetch("https://api64.ipify.org?format=json").then(res => res.json());
                let ipv6 = await fetch("https://api6.ipify.org?format=json").then(res => res.json());
                document.getElementById("ipv4").textContent = ipv4.ip;
                document.getElementById("ipv6").textContent = ipv6.ip;
            } catch (error) {
                console.error("Error fetching IP:", error);
                document.getElementById("ipv4").textContent = "Error fetching IPv4";
                document.getElementById("ipv6").textContent = "Error fetching IPv6";
            }
        }
    </script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
        }
        .container {
            margin-top: 50px;
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            display: inline-block;
        }
        h1 {
            font-size: 2em;
        }
        p {
            font-size: 1.5em;
        }
    </style>
</head>
<body onload="fetchIP()">
    <div class="container">
        <h1>Your IP Addresses</h1>
        <p><strong>IPv4:</strong> <span id="ipv4">Loading...</span></p>
        <p><strong>IPv6:</strong> <span id="ipv6">Loading...</span></p>
    </div>
</body>
</html>
