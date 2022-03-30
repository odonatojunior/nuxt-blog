<template>
  <section class="px-2 md:w-1/2 mx-auto">
    <ArticleHeader :goBack="true" :content="content" />
    <Content :document="content"/>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const content = await $content(`blog/${params.slug}`).fetch();
    return {
      content,
    };
  },

  head() {
    return {
      title: this.content.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.content.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.content.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.content.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.content.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.content.description,
        },
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
