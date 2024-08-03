<template>
  <div>
    <div class="header">
    

      <div class="logo">
        <img src="/logo.png" alt="logo" style="width: 70px" />
      </div>
      <ul class="links">
        <li><NuxtLink to="/">الرئيسية</NuxtLink></li>
        <li><NuxtLink to="/about">معلومات عنا</NuxtLink></li>
        <li><NuxtLink to="/projects">مشاريعنا</NuxtLink></li>
        <li><NuxtLink to="/services">خدماتنا</NuxtLink></li>
        <li><NuxtLink to="/contact">اتصل بنا</NuxtLink></li>
        <li><NuxtLink to="/RWOODCO_PROFILE.pdf" external target="_blank">البروفايل</NuxtLink></li>
      </ul>
      <div class="container_lang">
        <div class="lang" @click="openModalLang">
          اللغة

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 5h-9.12L10 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h7l1 3h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7.17 14.59a4.09 4.09 0 0 1-4.09-4.09a4.09 4.09 0 0 1 4.09-4.09c1.04 0 1.99.37 2.74 1.09l.09.04l-1.25 1.18l-.06-.05c-.29-.27-.78-.59-1.52-.59c-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.09c.04.19.05.38.05.59c0 2.35-1.59 4-3.92 4m6.03-1.71c.33.62.74 1.18 1.19 1.7l-.54.53zm.77-.76H13l-.33-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7M21 20a1 1 0 0 1-1 1h-7l2-2l-.81-2.77l.92-.92L17.79 18l.71-.73l-2.69-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20a1 1 0 0 1 1 1z"
            ></path>
          </svg>
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
      <ul class="links">
        <li><NuxtLink to="/">الرئيسية</NuxtLink></li>
        <li><NuxtLink to="/about">معلومات عنا</NuxtLink></li>
        <li><NuxtLink to="/projects">مشاريعنا</NuxtLink></li>
        <li><NuxtLink to="/services">خدماتنا</NuxtLink></li>
        <li><NuxtLink to="/contact">اتصل بنا</NuxtLink></li>
        <li><NuxtLink to="/RWOODCO_PROFILE.pdf" external target="_blank">البروفايل</NuxtLink></li>

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
