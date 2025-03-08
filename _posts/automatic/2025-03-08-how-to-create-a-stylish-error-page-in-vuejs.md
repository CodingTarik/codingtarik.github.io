---
title: How to Create a Stylish Error Page in Vue.js
description: Step-by-step guide to creating visually appealing and user-friendly error page in Vue.js
date: 2025-03-08T19:17:34.000Z
tags:
  - Vue.js
  - Web Development
  - Error Page
categories:
  - Web Development
  - Vue.js
math: false
---

# How to Create a Stylish Error Page in Vue.js

Handling error gracefully is an important aspect of any web application. In this post, we'll provide a detailed step-by-step guide on how to create a cool, visually appealing, and user-friendly error page in Vue.js. Get ready to combine clean error messages, eye-catching animations, and custom styles.

## Step 1: Create Vue Project

If you don't already have a Vue project, you can create a new Vue project using Vue CLI:

```bash
npm install -g @vue/cli
vue create vue-error-page
cd vue-error-page
```

## Step 2: Craft the Error Page

We're going to create an error page equipped with custom components, styles, and animations. For this guide, we'll create a 404-error page.

#### Create Error Page Component:

First, create a new file in the `src/components` directory and name it `ErrorPage.vue`.

```vue
<!-- src/components/ErrorPage.vue -->
<template>
  <div class="error-page">
    <div class="error-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Oops! The page you're seeking can't be found.</p>
      <button @click="goHome" class="error-button">Back to Home</button>
      <div class="error-animation">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8d7da;
  font-family: 'Arial', sans-serif;
}

.error-container {
  text-align: center;
  color: #721c24;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-out;
}

.error-message {
  font-size: 24px;
  margin-bottom: 20px;
}

.error-button {
  padding: 10px 20px;
  background-color: #721c24;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.error-button:hover {
  background-color: #5a1517;
}

.error-animation {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #721c24;
  border-radius: 50%;
  margin: 0 5px;
  animation: bounce 0.6s infinite alternate;
}

.circle:nth-child(1) {
  animation-delay: 0s;
}

.circle:nth-child(2) {
  animation-delay: 0.2s;
}

.circle:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
```

## Step 3: Integrate Error Page into the App

Now that you have your `ErrorPage.vue` component ready, we need to incorporate it into our Vue Router configuration so it can be displayed when a user attempts to access a non-existent page.

#### Configure Vue Router:

Make sure you have vue-router installed:

```bash
npm install vue-router
```

Then, add the router to your application. Open `src/router/index.js` (or create it if it doesn't exist) and configure the router to display the error page if no route matches.

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import