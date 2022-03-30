<template>
  <nav class="pt-4 pb-4 lg:pt-8 lg:pb-6 z-50 flex justify-between items-center flex-row-reverse lg:block">
    <div class="icon lg:hidden inline-block transition-all p-2" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="!activeMenu"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="activeMenu"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <ul class="flex md:justify-center md:items-center gap-x-2 transition-all showMenu" v-show="activeMenu">
      <li v-for="route in routes" :key="route.name">
        <nuxt-link
          :to="route.slug"
          class="transition-all hover:border-b-2 border-b-primary px-2 py-1"
        >
          {{ route.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          slug: "/",
          name: "Home",
          current: false,
        },
        {
          slug: "/blog",
          name: "Blog",
          current: false,
        },
        {
          slug: "/projects",
          name: "Projetos",
          current: false,
        },
        {
          slug: "/about",
          name: "Sobre",
          current: false,
        },
      ],
      activeMenu: true
    };
  },
  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
    },
    handleResize(width){
      if(width < 600){
        this.activeMenu = false;
      }
    }
  },
  mounted(){
    this.handleResize(window.innerWidth)
  }
};
</script>

<style>
  a.nuxt-link-active {
    font-weight: bold;
  }
  a.nuxt-link-exact-active {
    color: #10f463;
  }

  @media (max-width: 800px) {
    .showMenu{
      animation: showMenu 300ms forwards ease-out;
    }
  }

  @keyframes showMenu {
    from{
      opacity: 0;
      transform: translateX(1rem);
    }
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
