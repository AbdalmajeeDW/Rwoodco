<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="/logo.png" alt="logo" style="width: 70px" />
      </div>
      <ul class="links" v-for="(item, i) in items" :key="i">
        <li>
          <NuxtLink :to="item.url" :target="item.target">{{
            $t(`links.${item.name}`)
          }}</NuxtLink>
        </li>
      </ul>
      <div class="container_lang">
        <form>
          <select class="lang" id="locale-select" v-model="$i18n.locale">
            <v-icon style="font-size: 17px">mdi-translate</v-icon>

            <option value="ar">ar</option>
            <option value="en">en</option>
          </select>
        </form>
      
      </div>
      <div class="icon_drawer" @click="openDrawer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5em"
          height="2em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16"
          ></path>
        </svg>
      </div>
    </div>
    <div class="nav" v-if="drawer">
      <ul class="links" v-for="(item, i) in items" :key="i">
        <li>
          <NuxtLink :to="item.url" :target="item.target">{{
            $t(`links.${item.name}`)
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          name: "home",
          url: "/",
        },
        {
          name: "about",
          url: "/about",
        },
        {
          name: "projects",
          url: "/projects",
        },
        {
          name: "services",
          url: "/services",
        },

        {
          name: "contact",
          url: "/contact",
        },
        {
          name: "profile",
          url: "/RWOODCO-PROFILE.pdf",
          target: "_balnk",
        },
      ],
    };
  },
  methods: {
  
    openDrawer() {
      this.drawer = !this.drawer;
    },
   
  },
};
</script>
