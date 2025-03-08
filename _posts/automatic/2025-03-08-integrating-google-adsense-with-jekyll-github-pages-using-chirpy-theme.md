---
title: Integrating Google AdSense with Jekyll GitHub Pages using Chirpy Theme
description: A comprehensive guide to embedding Google AdSense into your Jekyll site with the Chirpy theme.
date: 2025-03-08T20:24:43.000Z
tags:
  - Jekyll
  - GitHub Pages
  - Google AdSense
  - Web Development
categories:
  - Development
  - Blogging
math: false
---

# Introduction

Monetizing your blog can significantly enhance its value, and one of the most popular ways to do so is through Google AdSense. This guide will walk you through the steps of integrating Google AdSense into a Jekyll site hosted on GitHub Pages using the Chirpy theme.

## Step 1: Setting Up a Google AdSense Account

Before you can embed ads on your site, you need a Google AdSense account. Here's how to set it up:

1. **Visit Google AdSense**: Head over to the [Google AdSense website](https://www.google.com/adsense/start/) and register for a new account.
2. **Add Your Site URL**: During the registration process, add your GitHub Pages URL (e.g., `https://yourusername.github.io`).
3. **Verification**: Wait for Google to review your application and verify your account.

## Step 2: Embedding AdSense Code into the Chirpy Theme

After setting up your AdSense account, you need to insert specific code snippets into your Chirpy theme.

### a) Insert Global AdSense Code in `<head>`

Google requires a global script to be included within the `<head>` section of your site pages.

1. **Open the Layout File**: Locate and open the `_layouts/default.html` file in your Jekyll project.
2. **Insert the Code**: Copy and paste the following code snippet directly before the closing `</head>` tag:
   
   ```html
   {% if site.google_adsense %}
     {{ site.google_adsense | safe }}
   {% endif %}
   ```

3. **Add to Configuration**: Open the `_config.yml` file and add your AdSense script:

   ```yaml
   google_adsense: '<script data-ad-client="ca-pub-XXXXXXXXXXXXXXX" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'
   ```

   Replace `ca-pub-XXXXXXXXXXXXXXX` with your specific Google AdSense Publisher ID.

### b) Include Ad Blocks (e.g., Between Posts)

1. **Create and Copy Ad Block**: Within your AdSense dashboard, create a new ad unit and copy the slot ID (e.g., `1234567890`).

2. **Modify Post Layout**: Open the `_layouts/post.html` file and insert your ad code at a strategic location, such as after a blog post:

   ```html
   <div style="text-align: center;">
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"></ins>
     <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
     </script>
   </div>
   ```

   Adjust the `data-ad-client` and `data-ad-slot` based on your AdSense setup.

## Step 3: Deploy and Test Your Changes

Once you've embedded the code, it's time to make sure it's functioning correctly.

- **Local Testing**: Run `bundle exec jekyll serve` to test your site locally and check if ads appear.
- **Commit and Push to GitHub**:

  ```sh
  git add .
  git commit -m "Add AdSense integration"
  git push origin main
  ```

  Remember, it might take a few hours for ads to appear on a new account.

## Step 4: Troubleshooting Common Issues

If your ads are not visible, consider the following checks:

- **AdBlockers**: Ensure that your adblocker browser extension is disabled.
- **Console Errors**: Use the browser developer console (F12 → Console) to identify any script errors.
- **GitHub Pages Constraints**: If you encounter restrictions with GitHub Pages, consider deploying on platforms like Netlify or Cloudflare Pages for better flexibility in handling scripts.

## Conclusion

By following these steps, your Jekyll blog should now successfully host Google AdSense ads. Ensure you comply with Google's policies for a seamless experience. Happy blogging and monetizing! 😊