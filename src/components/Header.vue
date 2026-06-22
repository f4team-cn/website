<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { Motion } from 'motion-v';
import SplitText from './animations/SplitText.vue';

// --- 标签数据 ---
const tags = [
  { text: '# 逆向工程', color: 'blue' },
  { text: '# C/C++ 开发', color: 'blue' },
  { text: '# Android 原生开发', color: 'lime' },
  { text: '# 跨平台软件开发', color: 'lime' },
  { text: '# Golang', color: 'purple' },
  { text: '# Java/Kotlin', color: 'purple' },
  { text: '# PHP/Python', color: 'purple' },
  { text: '# TypeScript', color: 'emerald' },
  { text: '# 现代化前端', color: 'emerald' },
  { text: '# Docker/K8s', color: 'orange' },
  { text: '# 自动化运维', color: 'orange' },
  { text: '# Full Stack tEam', color: 'gray' },
];

const getColorClass = (color: string) => {
  const mapping: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 hover:bg-blue-100',
    lime: 'text-lime-600 bg-lime-50 border-lime-200 dark:bg-lime-900/30 dark:text-lime-400 dark:border-lime-800 hover:bg-lime-100',
    purple:
      'text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800 hover:bg-purple-100',
    emerald:
      'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800 hover:bg-emerald-100',
    orange:
      'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800 hover:bg-orange-100',
    gray: 'text-gray-500 bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700 hover:bg-gray-100',
  };
  return mapping[color] || mapping.gray;
};

// --- DOM Refs ---
const illustrationRef = ref(null);
const logoRef = ref(null);
const blob1Ref = ref(null);
const blob2Ref = ref(null);

// --- GSAP 循环动画 (仅保留插图和气泡的持续动态) ---
onMounted(() => {
  const ctx = gsap.context(() => {
    if (illustrationRef.value) {
      gsap.to(illustrationRef.value, {
        y: -15,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
    gsap.to([blob1Ref.value, blob2Ref.value], {
      x: 'random(-20, 20)',
      y: 'random(-20, 20)',
      duration: 6,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });
  });
  return () => ctx.revert();
});

const onLogoHover = () => {
  gsap.fromTo(
    logoRef.value,
    { filter: 'brightness(1)' },
    { filter: 'brightness(1.3) drop-shadow(0 0 10px rgba(59,130,246,0.5))', duration: 0.4, yoyo: true, repeat: 1 }
  );
};
</script>

<template>
  <header class="relative overflow-hidden bg-white dark:bg-gray-900">
    <div
      class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
      style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 32px 32px"
    ></div>

    <nav class="relative z-20 border-t-4 border-blue-500 backdrop-blur-md bg-white/60 dark:bg-gray-900/60">
      <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <a href="#" class="group" @mouseenter="onLogoHover">
<!--          <img-->
<!--            ref="logoRef"-->
<!--            class="w-auto h-12 lg:h-16 transition-transform group-hover:scale-105"-->
<!--            src="/logo/logo-hdpi.png"-->
<!--            alt="挽星tEam Logo"-->
<!--          />-->
          <div class="group">
            <img
              src="/logo/1.5x/logo-dark-hdpi.png"
              class="w-auto h-12 lg:h-16 transition-transform group-hover:scale-105 block dark:hidden"
              alt="Logo Light"
            />
            <img
              src="/logo/1.5x/logo-light-hdpi.png"
              class="w-auto h-12 lg:h-16 transition-transform group-hover:scale-105 hidden dark:block"
              alt="Logo Dark"
            />
          </div>
        </a>
        <div
          class="hidden md:flex items-center space-x-6 text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase"
        >
          <span class="hover:text-blue-500 cursor-default transition-colors">EST. 2022</span>
          <span class="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></span>
          <span class="hover:text-blue-500 cursor-default transition-colors">4 Core Members</span>
        </div>
      </div>
    </nav>

    <div class="container px-6 py-16 lg:py-24 mx-auto relative z-10">
      <div class="items-center lg:flex lg:gap-16">
        <div class="w-full lg:w-3/5">
          <div class="lg:max-w-2xl">
            <div class="flex flex-wrap items-baseline gap-3">
              <h1 class="text-5xl font-black tracking-tighter text-gray-800 dark:text-white lg:text-7xl">
                <SplitText
                  text="挽星tEam"
                  :delay="100"
                  :duration="0.8"
                  ease="power4.out"
                  split-type="chars"
                  :from="{ opacity: 0, y: 30 }"
                  :to="{ opacity: 1, y: 0 }"
                  class-name="inline-block bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
                />
              </h1>
              <span class="text-3xl font-light text-blue-500/40">/</span>
              <span class="text-3xl font-bold text-blue-500 tracking-tighter">
                <SplitText
                  text="F4Team"
                  :delay="400"
                  :duration="0.8"
                  ease="power4.out"
                  split-type="chars"
                  :from="{ opacity: 0, x: 20 }"
                  :to="{ opacity: 1, x: 0 }"
                  class-name="inline-block bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
                />
              </span>
            </div>

            <Motion
              tag="h2"
              class="mt-10 text-3xl font-bold tracking-tight text-gray-800 dark:text-white lg:text-4xl font-sans"
              :initial="{
                opacity: 0,
                letterSpacing: '-0.05em',
                filter: 'blur(12px)',
                scale: 0.95,
              }"
              :animate="{
                opacity: 1,
                letterSpacing: '0.02em',
                filter: 'blur(0px)',
                scale: 1,
              }"
              :transition="{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }"
            >
              “俯首深耕底层，抬头挽月摘星”
            </Motion>

            <div class="relative mt-8 overflow-hidden group">
              <div class="absolute left-0 top-0 w-0.5 h-full bg-blue-500/20 dark:bg-blue-400/10">
                <Motion
                  tag="div"
                  class="w-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  :initial="{ height: '0%', opacity: 0 }"
                  :animate="{ height: '100%', opacity: 1 }"
                  :transition="{ duration: 1, ease: 'easeOut', delay: 0.2 }"
                />
              </div>

              <Motion
                tag="p"
                class="pl-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-2xl font-medium"
                :initial="{
                  opacity: 0,
                  x: -15,
                  clipPath: 'inset(0 100% 0 0)',
                  filter: 'blur(5px)',
                }"
                :animate="{
                  opacity: 1,
                  x: 0,
                  clipPath: 'inset(0 0% 0 0)',
                  filter: 'blur(0px)',
                }"
                :transition="{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1], // Expo Out 曲线
                  delay: 0.1,
                }"
                :style="{ willChange: 'transform, clip-path, opacity, filter' }"
              >
                我们是一个成立于
                <span
                  class="relative inline-block px-1.5 py-0.5 mx-1 font-mono font-bold text-blue-600 dark:text-blue-400 rounded transition-colors duration-300"
                >
                  2022.12.20
                  <span class="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/10 -z-10 rounded"></span>
                </span>
                的精锐技术小组。专注于从二进制逆向到云原生架构的全链路探索，用四位一体的协作，交付稳健且具前瞻性的技术方案。
              </Motion>
            </div>

            <div class="flex flex-wrap gap-2.5 mt-10">
              <Motion
                v-for="(tag, index) in tags"
                :key="tag.text"
                tag="span"
                class="px-3 py-1.5 text-[10px] md:text-xs font-black border rounded-lg cursor-default transition-all duration-300"
                :class="getColorClass(tag.color)"
                :initial="{ opacity: 0, scale: 0.7, y: 10 }"
                :animate="{ opacity: 1, scale: 1, y: 0 }"
                :transition="{ delay: 0.8 + index * 0.05, duration: 0.4 }"
                :hover="{ scale: 1.05, y: -2 }"
              >
                {{ tag.text }}
              </Motion>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-12 lg:mt-0 lg:w-1/2">
          <div class="relative w-full max-w-md">
            <div
              class="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            ></div>
            <div
              class="absolute -bottom-8 right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            ></div>

            <img
              class="relative w-full h-auto transform transition-all duration-500 hover:rotate-2 hover:scale-105"
              src="/images/email.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
