<template>
  <p class="mt-8 pb-4 text-center text-gray-500">Donato Jr. &copy; | {{ currentDate }}</p>
</template>

<script>
export default {
  computed: {
    currentDate(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>
