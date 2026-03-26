<script setup lang="ts"></script>

<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <a href="#"> <img class="w-auto h-10" src="/logo/logo-hdpi.png" alt="" /> </a>
      <p class="text-sm text-gray-600 dark:text-gray-300">
        © Copyright 2022 - {{ new Date().getFullYear() }}. All Rights Reserved.
      </p>
      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="https://github.com/f4team-cn"
            target="_blank"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
