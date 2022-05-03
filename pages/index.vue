<template>
  <div class="my-2 md:my-12">
    <h1
      class="
        text-6xl
        lg:text-7xl
        mx-auto
        md:w-1/2
        font-extrabold
        text-center
        tracking-tighter
        font-display
        z-50
      "
    >
      Oi, eu sou o
      <br class="hidden lg:block break-words" />
      <span
        class="
          bg-gradient-to-r
          from-primary
          to-secondary
          bg-clip-text
          text-transparent
          px-1
        "
        >Donato
      </span>
    </h1>

    <nuxt-content :document="pageInfo" class="text-xl text-gray-400 mx-auto lg:w-1/2 my-4 italic text-center">
    </nuxt-content>
    <div class="flex justify-center items-center gap-4">
      <IconButton link="https://linkedin.com/in/odonatojunior" icon="bi-linkedin"/>
      <IconButton link="https://github.com/odonatojunior" icon="bi-github"/>
      <IconButton link="https://instagram.com/odonatojunior" icon="bi-instagram"/>
      <IconButton link="https://twitter.com/odonatojunior" icon="bi-twitter"/>
    </div>

    <section
      class="
        w-full
        lg:w-2/3
        mx-auto
        my-12
        flex flex-col
        md:flex-row
        justify-center
        items-stretch
        gap-2
      "
    >
      <Card
        v-for="article of articles"
        :key="article.title"
        :content="article"
        :isPost="false"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog")
      .only(["title", "tags", "path"])
      .sortBy("createdAt", "desc")
      .limit(2)
      .fetch();
    const pageInfo = await $content('index').fetch();
    return {
      articles,
      pageInfo,
    };
  },
};
</script>
