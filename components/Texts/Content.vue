<template>
  <nuxt-content
    :document="document"
    tag="article"
    class="
      dark:prose-invert
      mx-auto
      prose
      prose-p:text-gray-400
      prose-headings:my-2
      prose-headings:font-display
      prose-headings:tracking-tighter
      prose-hr:my-2
      prose-img:rounded-md
      prose-img:border-2
      prose-img:border-white/30
      prose-img:mb-1
      prose-li:marker:text-secondary
      prose-blockquote:border-l-secondary
      prose-pre:border-2
      prose-pre:border-white/30
    "
    :class="classes"
  ></nuxt-content>
</template>

<script>
export default {
  props: {
    document: Object,
    classes: Object,
  },
};
</script>

<style>

</style>
