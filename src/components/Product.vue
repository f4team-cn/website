<script setup lang="ts"></script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        我们的<span class="text-blue-500">项目</span>
      </h1>
      <div class="mt-2">
        <span class="inline-block w-28 h-1 bg-blue-500 rounded-full"></span>
        <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span
        ><span class="inline-block w-1 h-1 ml-2 bg-blue-500 rounded-full"></span>
      </div>
      <div class="grid grid-cols-1 mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              src="/ws/link.f4team.cn.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">F4Link · 短链服务</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">极简短网址生成平台</h1>
              <p class="text-gray-600 leading-relaxed">
                一键生成短链接，支持多域名切换，融合多域名。
                <span class="block mt-1 text-sm text-gray-400">永久免费 · 无需注册</span>
              </p>
            </div>
            <div class="flex items-center flex-wrap">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://link.f4team.cn"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              src="/ws/novel.f4team.cn.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">轻阅小说 · 精品阅读</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">海量小说免费阅读平台</h1>
              <p class="text-gray-600 leading-relaxed">
                热门小说免费阅读，支持收藏、记忆浏览。
                <span class="block mt-1 text-sm text-gray-400"
                  >免费阅读 · 无需注册<code class="ml-2 text-red-500"
                    >(本平台数据均来自网络，如有侵权请联系我们删除)</code
                  ></span
                >
              </p>
            </div>
            <div class="flex items-center flex-wrap">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://novel.f4team.cn"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              src="/ws/sns.f4team.cn.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">智网统计 · 极简安全</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">极简且注重隐私的访客分析平台</h1>
              <p class="text-gray-600 leading-relaxed">
                重新定义网站数据洞察
                <span class="block mt-1 text-sm text-gray-400">免费使用</span>
              </p>
            </div>
            <div class="flex items-center flex-wrap">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://sns.f4team.cn"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              src="/ws/docs.f4team.cn.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">产品文档 · 清晰明了</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">挽星tEam 文档中心</h1>
              <p class="text-gray-600 leading-relaxed">一站式查阅文档。</p>
            </div>
            <div class="flex items-center flex-wrap">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://docs.f4team.cn"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform group-hover:animate-spin"
              src="/ws/vortex-app.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">Vortex · 文件下载器</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                轻量、灵活的文件下载器 - 让下载更高效
              </h1>
              <p class="text-gray-600 leading-relaxed">
                一个现代化的文件下载器
                <span class="block mt-1 text-sm text-gray-400">轻量 · 灵活 · 可扩展</span>
              </p>
            </div>
            <div class="flex items-center flex-wrap">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://docs.f4team.cn/vortex"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-opacity-100 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02] group"
        >
          <div class="flex-grow overflow-hidden">
            <img
              class="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              src="/ws/unknown.png"
            />
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <h2 class="text-xs font-semibold tracking-wider text-indigo-600">网盘文件 · 高速下载</h2>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">高速网盘文件下载平台</h1>
              <p class="text-gray-600 leading-relaxed">
                <span class="block mt-1 text-sm text-gray-400"
                  >免费使用 · 无需注册<code class="ml-2 text-red-500"
                    >(本平台仅提供资源解析服务，不存储、不上传内容。资源来源于第三方链接，合法性由用户负责。禁止用于侵权或违法行为，如有侵权请联系删除)</code
                  ></span
                >
              </p>
            </div>
            <div class="flex items-center flex-wrap gap-3">
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="https://pan.f4team.cn"
                target="_blank"
              >
                查看
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <a
                class="text-indigo-500 border rounded-md px-4 py-2 mt-2 hover:border-indigo-800 hover:bg-indigo-50 border-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                href="javascript:document.getElementById('PanUserAgreement').showModal()"
              >
                免责声明
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                  <path d="M14 2v6h6" />
                  <path d="M8 13h8M8 17h8M8 9h4" />
                </svg>
              </a>
            </div>
          </div>
          <dialog id="PanUserAgreement" class="rounded-2xl p-8 w-[500px] max-w-[90vw] shadow-2xl backdrop:bg-black/40">
            <h2 class="text-xl font-bold mb-6">该平台免责声明</h2>

            <p class="text-base text-gray-600 mb-6 leading-relaxed">
              本平台仅提供网络资源解析技术服务，不存储、不上传、不分发任何文件内容。所有资源均来源于用户自行提供的第三方链接，相关内容的合法性、完整性及安全性由用户自行负责。
              用户在使用本平台服务时，应遵守相关法律法规，不得利用本平台从事任何侵犯他人合法权益的行为，包括但不限于侵犯知识产权、传播违法信息等。因用户行为产生的一切法律责任由用户自行承担。
              如权利人认为本平台提供的服务涉及侵犯其合法权益，请及时与我们联系并提供相关证明材料，本平台将在核实后依法采取删除、屏蔽等必要措施。
              本平台不对解析结果的有效性、合法性及安全性作任何形式的保证，请用户自行判断并承担使用风险。
            </p>

            <div class="flex justify-end">
              <button
                onclick="document.getElementById('PanUserAgreement').close()"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                确定
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
