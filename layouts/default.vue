<template>
  <div>
    <Header />
    <v-carousel hide-delimiters cycle interval="3000" height="640">
      <template v-slot:next="{ props }">
        <div v-if="$i18n.locale == 'ar'">
          <v-btn
            v-bind="props"
            icon="mdi-arrow-left"
          ></v-btn>
        </div>
        <div v-else>
          <v-btn
            v-bind="props"
            icon="mdi-arrow-right"
          ></v-btn>
        </div>
      </template>
      <template v-slot:prev="{ props }">
        <v-btn color="green" v-bind="props">
          <div v-if="$i18n.locale == 'ar'">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
          <div v-else><v-icon>mdi-arrow-left</v-icon></div>
        </v-btn>
      </template>
      <v-carousel-item src="/1.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/2.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/3.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/4.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/5.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/6.jpeg" cover></v-carousel-item>
    </v-carousel>

    <div>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("Rwoodco");
const description = ref("My App Description");

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
