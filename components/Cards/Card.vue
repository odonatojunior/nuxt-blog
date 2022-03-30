<template>
  <nuxt-link :to="content.path" class="col-span-3 md:col-auto z-50">
    <aside class="p-4 transition-all hover:bg-white/20 bg-white/10 rounded-md">
      <Badge :name="content.tags" />
      <img
        class="h-48 w-full object-cover rounded-md my-4"
        v-if="content.image"
        :src="content.image"
        alt=""
      />
      <div
        v-if="!content.image && isPost"
        class="flex justify-center items-center h-48 w-full object-cover rounded-md my-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 fill-white/25"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <h2
        class="
          text-2xl
          font-bold font-display
          leading-tight
          tracking-tight
          mt-2
        "
      >
        {{ content.title }}
      </h2>
      <p v-if="content.description" class="text-gray-400">
        {{ content.description }}
      </p>
    </aside>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: Object,
    isPost: Boolean
  },
};
</script>

<style>
</style>
