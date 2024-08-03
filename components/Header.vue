<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="/logo.png" alt="logo" style="width: 70px" />
      </div>
      <ul class="links" v-for="(item, i) in items" :key="i">
        <li>
          <NuxtLink :to="item.url" :target="item.target">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>
      <div class="container_lang">
        <div class="lang" @click="openModalLang">
          اللغة
          <v-icon style="font-size: 17px;">mdi-translate</v-icon>
          
        </div>
        <ul v-if="lang" class="select_lang">
          <li @click="selectLang">العربية</li>
          <li @click="selectLang">الانكليزية</li>
        </ul>
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
            item.name
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
      lang: false,
      items: [
        {
          name: "الرئيسية",
          url: "/",
        },
        {
          name: "معلومات عنا",
          url: "/about",
        },
        {
          name: "مشاريعنا",
          url: "/projects",
        },
        {
          name: "خدماتنا",
          url: "/services",
        },
       
        {
          name: "اتصل بنا",
          url: "/contact",
        },
        {
          name: "البروفايل",
          url: "/RWOODCO_PROFILE.pdf",
          target: "_balnk",
        },
      ],
    };
  },
  methods: {
    openModalLang() {
      this.lang = !this.lang;
    },
    openDrawer() {
      this.drawer = !this.drawer;
    },
    selectLang() {
      this.lang = false;
    },
  },
};
</script>
