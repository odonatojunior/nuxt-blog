<template>
  <section class="px-2 md:w-1/2 mx-auto">
    <ArticleHeader :content="page" />
    <Content :document="page"/>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const page = await $content('about').fetch()
    return {
      page
    }
  }
}
</script>

<style>

</style>
