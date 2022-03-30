<template>
  <div>
    <h3 class="text-2xl text-center font-bold font-display my-8" v-if="emptyArticles">Nenhum post encontrado</h3>
    <section v-if="articles" class="grid grid-cols-3 gap-4">
      <Card
        v-for="article of articles"
        :key="article.title"
        :content="article"
        :isPost="true"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("projects")
      .only(["title", "tags", "path", "description", "image"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles,
    };
  },
  computed: {
    emptyArticles(){
      return this.articles.length < 1
    }
  },
  head(){
    return {
      title: `Donato Jr | Projetos`
    }
  }
};
</script>

<style>
</style>
