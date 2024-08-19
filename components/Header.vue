<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo.png" alt="logo" />
        </NuxtLink>
      </div>

      <ul class="links" v-for="(item, i) in items" :key="i">
        <li v-if="item.name != 'about'">
          <NuxtLink :to="item.url" :target="item.target">{{
            $t(`links.${item.name}`)
          }}</NuxtLink>
        </li>
        <ul v-else class="sub">
          <NuxtLink :to="item.url" :target="item.target">
            {{ $t(`links.${item.name}`) }}
          </NuxtLink>
          <v-icon class="iconSub" @click="sub = !sub">mdi-chevron-down</v-icon>
          <div></div>
          <ul class="showSub">
            <li>
              <NuxtLink :to="item.sub.url" :target="item.target">
                {{ $t(`links.certificates`) }}
              </NuxtLink>
            </li>
          </ul>
        </ul>
      </ul>
      <div class="container_lang">
        <div class="lang" @click="fixed = !fixed">
          <p>
            {{ $i18n.locale === "en" ? "English" : "العربية" }}
          </p>

          <v-icon style="font-size: 17px; color: black">mdi-earth</v-icon>
        </div>

        <ul class="select_lang" v-if="fixed">
          <li @click="selectLan('ar')">
            <v-icon style="font-size: 17px; color: #a30e22">{{
              check && "mdi-check"
            }}</v-icon>
            {{ $i18n.locale === "ar" ? "العربية" : "Arabic" }}
          </li>
          <li @click="selectLan('en')">
            <v-icon style="font-size: 17px; color: #a30e22">{{
              !check && "mdi-check"
            }}</v-icon>
            {{ $i18n.locale === "ar" ? "الانكليزية" : "English" }}
          </li>
        </ul>
      </div>
      <div @click="isOpen" class="con_Icon">
        <div class="icon_drawer" @click="openDrawer">
          <v-icon
            style="
              font-size: 25px;
              color: #a30e22;
              display: flex;
              justify-content: flex-end;
            "
            >mdi-format-align-left</v-icon
          >
        </div>
      </div>
    </div>
    <div :class="$i18n.locale === 'en' ? 'nav left' : 'nav right'" v-if="drawer">
      <ul class="links" v-for="(item, i) in items" :key="i">
        <li @click="closeDrawer" v-if="item.name != 'about'">
          <NuxtLink :to="item.url" :target="item.target">{{
            $t(`links.${item.name}`)
          }}</NuxtLink>
        </li>
        <ul v-else class="sub">
          <NuxtLink :to="item.url" :target="item.target">
            {{ $t(`links.${item.name}`) }}
          </NuxtLink>
          <v-icon class="iconSub" @click="sub = !sub">mdi-chevron-down</v-icon>
          <ul class="showSub">
            <li class="linkeSub">
              <NuxtLink :to="item.sub.url" :target="item.target">
                {{ $t(`links.certificates`) }}
              </NuxtLink>
            </li>
          </ul>
        </ul>
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
      check: false,
      sub: false,
      items: [
        {
          name: "home",
          url: "/",
        },
        {
          name: "about",
          url: "/about",
          sub: { name: "certificates", url: "/certificates" },
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
  mounted: function () {
    setTimeout(() => {
      const headerLinks = document.querySelectorAll(".header .links");

      headerLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add("appear");
        }, index * 100);
      });
    }, 500);
  },
  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
    },
    isOpen() {
      if (this.drawer === true) {
        const navLinks = document.querySelectorAll(".nav > .links");

        setTimeout(() => {
          navLinks.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add("appear");
            }, index * 100);
          });
        }, 500);
      } else {
        this.drawer = false;
      }
    },
    closeDrawer() {
      this.drawer = false;
    },
    selectLan(lan) {
      if (lan === "en") {
        this.check = false;

        this.$i18n.locale = "en";
        this.fixed = false;
      } else {
        this.$i18n.locale = "ar";
        this.fixed = false;

        this.check = true;
      }
    },
  },
};
</script>
