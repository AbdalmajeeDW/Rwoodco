<template>
  <div>
    <Header />
    <div v-if="showFlat && $route.name !== 'contact'" class="flat">
      <NuxtLink href="https://wa.me/+966568594572">
        <div>
          <v-icon style="color: white">mdi-whatsapp</v-icon>
        </div>
      </NuxtLink>
      <NuxtLink
        href="https://www.tiktok.com/@rwoodco3?fbclid=IwY2xjawEt1QJleHRuA2FlbQIxMAABHSsss6Bmbui9pqH0_BqaF6qX7seEUpGmEw4SYMQHmtBJYsfooFEk_CC8lg_aem_Ixu3-depxtf4yHR0OJsO_g"
        target="_balnk"
      >
        <img src="/888.svg" alt="" style="width: 21px; height: 21px; margin-top: 4px" />
      </NuxtLink>
      <NuxtLink
        href="https://www.facebook.com/profile.php?id=61559025317626&mibextid=ZbWKwL"
        target="_balnk"
        ><span
          id="face"
          class="mdi mdi-facebook"
          style="color: white; font-size: 23px"
        ></span
      ></NuxtLink>
      <NuxtLink
        href="https://www.instagram.com/rwoodco_?igsh=MTV0Y2N3d2l1b2kxcA=="
        target="_balnk"
      >
        <span class="mdi mdi-instagram" style="color: white; font-size: 23px"></span>
      </NuxtLink>
    </div>
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
const title = ref("Rwoodco");
const showFlat = ref(false);
const description = ref("My App Description");
const handleScroll = () => {
  showFlat.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
