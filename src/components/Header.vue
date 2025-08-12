<script setup lang="ts">

import SplitText from './animations/SplitText.vue';
</script>

<template>
  <header class="bg-white dark:bg-gray-900">
    <nav class="border-t-4 border-blue-500">
      <div class="container flex items-center justify-between px-6 py-3 mx-auto">
        <a href="#"> <img class="w-auto h-16" src="/logo/logo-hdpi.png" alt=""> </a>
      </div>
    </nav>
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              <SplitText
                  text="挽星tEam"
                  class-name="text-4xl font-semibold text-center"
                  :delay="100"
                  :duration="0.6"
                  ease="power3.out"
                  split-type="chars"
                  :from="{ opacity: 0, y: 40 }"
                  :to="{ opacity: 1, y: 0 }"
                  :threshold="0.1"
                  root-margin="-100px"
                  text-align="center"
              />
              - <span class="text-blue-500"> <SplitText
                text="F4Team"
                class-name="text-2xl font-semibold text-center"
                :delay="100"
                :duration="0.6"
                ease="power3.out"
                split-type="chars"
                :from="{ opacity: 0, y: 40 }"
                :to="{ opacity: 1, y: 0 }"
                :threshold="0.1"
                root-margin="-100px"
                text-align="center"
            /> </span></h1>
            <p class="mt-3 text-gray-600 dark:text-gray-400">一个建立于 <span class="font-medium text-blue-500">2022年12月20日</span>
              的网络团队。</p>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img class="w-full h-full max-w-md" src="/images/email.svg" alt="挽星tEam">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>