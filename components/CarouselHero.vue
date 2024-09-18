<template>
  <v-carousel
    hide-delimiters
    hide-delimiter-background
    interval="3000"
    cycle
    style="margin-top: 90px"
  >
    <template v-slot:next="{ props }">
      <div v-if="$i18n.locale == 'ar'" style="">
        <v-btn v-bind="props" icon="mdi-arrow-left"></v-btn>
      </div>
      <div v-else>
        <v-btn v-bind="props" icon="mdi-arrow-right"></v-btn>
      </div>
    </template>
    <template v-slot:prev="{ props }">
      <v-btn color="green" v-bind="props" style="">
        <div v-if="$i18n.locale == 'ar'">
          <v-icon>mdi-arrow-right</v-icon>
        </div>
        <div v-else><v-icon>mdi-arrow-left</v-icon></div>
      </v-btn>
    </template>

    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/2.jpeg" alt="Image 1" class="carousel-img" />
        <img src="/public/carousel/2_2.jpeg" alt="Image 2" class="carousel-img" />
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/1.jpeg" alt="Image 4" class="carousel-img" />
        <img src="/public/carousel/1_1.jpeg" alt="Image 4" class="carousel-img" />
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/3.jpeg" alt="Image 4" class="carousel-img" />
        <img src="/public/carousel/3_3.jpeg" alt="Image 4" class="carousel-img" />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.v-carousel {
  height: 600px;
  width: 100%;
  overflow: hidden;
}

.v-carousel-item {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  width: 100%;
  gap: 5px;
}

.carousel-img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 900px) {
  .carousel-img {
    width: 100%;
  }
}
</style>
