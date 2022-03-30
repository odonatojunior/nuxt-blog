<template>
  <span class="py-1 px-4 rounded-full text-sm font-bold " :class="checkType">{{name}}</span>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    checkType(){
      return {
        'bg-primary text-teal-900': this.name === 'Desenvolvimento',
        'bg-secondary text-white': this.name !== 'Desenvolvimento',
      }
    }
  }
}
</script>

<style>

</style>
