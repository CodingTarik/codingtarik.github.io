---
title: Color Palette Generator for Your Designs
description: Generate beautiful color combinations for your projects.
date: 2025-03-06T11:00:00.000Z
tags:
  - Tools
  - Design
  - Colors
categories:
  - Tools
  - Web
math: false
---

# Color Palette Generator

Choosing the right colors is crucial for any design project, whether you're designing a website, logo, or creating graphics. The **Color Palette Generator** helps you create beautiful and harmonious color palettes for your next project.

**How does the Color Palette Generator work?**

1. Select a base color you want to start with.
2. The generator will suggest a color palette based on that color.
3. You can tweak the palette and choose additional colors.
4. Copy the colors and use them directly in your design!

Get started and see how easily you can create stunning color combinations.

<div class="color-palette-generator">
  <h2>Generate Color Palettes</h2>
  <input type="color" id="baseColor" />
  <button id="generatePaletteButton">Generate Palette</button>
  <div id="paletteOutput"></div>
</div>

<script>
  document.getElementById('generatePaletteButton').addEventListener('click', function() {
    const baseColor = document.getElementById('baseColor').value;
    const palette = generatePalette(baseColor);
    const paletteOutput = document.getElementById('paletteOutput');
    paletteOutput.innerHTML = '';
    
    palette.forEach(color => {
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = color;
      colorDiv.classList.add('colorBox');
      paletteOutput.appendChild(colorDiv);
    });
  });

  function generatePalette(baseColor) {
    // Simple color palette generation based on lightness variations
    const colorList = [];
    for (let i = -5; i <= 5; i++) {
      colorList.push(lightenOrDarkenColor(baseColor, i * 10));
    }
    return colorList;
  }

  function lightenOrDarkenColor(color, amount) {
    let usePound = false;
    if (color[0] == "#") {
      color = color.slice(1);
      usePound = true;
    }

    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    const colorString = (usePound ? "#" : "") + (r << 16 | b << 8 | g).toString(16).padStart(6, '0');
    return colorString;
  }
</script>

<style>
  .color-palette-generator {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    margin-top: 40px;
  }

  .color-palette-generator input {
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }

  .color-palette-generator button {
    background-color: #FF6347;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1rem;
  }

  .color-palette-generator button:hover {
    background-color: #FF4500;
  }

  .colorBox {
    width: 50px;
    height: 50px;
    margin: 5px;
    display: inline-block;
  }
</style>
