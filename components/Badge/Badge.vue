<template>
  <span class="py-1 px-4 rounded-full text-sm font-bold bg-primary text-teal-900" :class="checkType">{{name}}</span>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    checkType(){
      return {
        'bg-secondary text-white': this.name !== 'Desenvolvimento',
      }
    }
  }
}
</script>

<style>

</style>
