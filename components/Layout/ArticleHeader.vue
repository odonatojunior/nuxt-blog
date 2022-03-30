<template>
  <header class="flex flex-col gap-y-3 mb-4">
    <a
      href="#"
      class="flex self-start items-center gap-x-2 p-1 text-gray-400 z-50"
      v-show="goBack"
      @click="lastRoute"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      Voltar
    </a>
    <h1 class="text-3xl font-bold font-display tracking-tight">{{ content.title }}</h1>
    <div class="bg-primary w-full rounded-full block h-0.5"></div>
    <Badge v-show="content.tags" :name="content.tags" class="self-start" />
  </header>
</template>

<script>
export default {
  props: {
    "content": Object,
    "goBack": Boolean
  },
  methods: {
    lastRoute() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>
