<template>
  <section class="px-2 md:w-1/2 mx-auto">
    <ArticleHeader :goBack="true" :content="content" />
    <Content :document="content"/>
  </section>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta';
export default {
  async asyncData({ $content, params }) {
    const content = await $content(`projects/${params.slug}`).fetch();
    return {
      content,
    };
  },
  methods: {
    lastRoute() {
      this.$router.back();
    },
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.content.title,
        description: this.content.description,
        url: `https://odonatojunior.github.io/articles/${this.$route.params.slug}`
      }
      return getSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: `${this.content.title} | Donato Jr.`,
      meta: [
        ...this.meta,
      ],
    };
  },
};
</script>

<style scoped>
body {
  overflow: auto;
}
</style>
