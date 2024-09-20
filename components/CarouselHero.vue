<template>
  <v-carousel interval="6000" cycle hide-delimiter-background style="margin-top: 90px">
    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/12.jpeg" class="img" alt="Image 1" />
        <img
          v-if="isWideScreen"
          src="/public/carousel/121.jpeg"
          class="img"
          alt="Image 2"
        />
      </div>
    </v-carousel-item>
    <v-carousel-item v-if="isWideScreen2">
      <div class="carousel-container">
        <img src="/public/carousel/121.jpeg" class="img" alt="Image 2" />
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/2.jpeg" class="img" alt="Image 1" />
        <img
          v-if="isWideScreen"
          src="/public/carousel/2_2.jpeg"
          class="img"
          alt="Image 2"
        />
      </div>
    </v-carousel-item>
    <v-carousel-item v-if="isWideScreen2">
      <div class="carousel-container">
        <img src="/public/carousel/2_2.jpeg" class="img" alt="Image 2" />
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/1.jpeg" class="img" alt="Image 4" />
        <img
          v-if="isWideScreen"
          src="/public/carousel/1_1.jpeg"
          class="img"
          alt="Image 4"
        />
      </div>
    </v-carousel-item>
    <v-carousel-item v-if="isWideScreen2">
      <div class="carousel-container">
        <img src="/public/carousel/1_1.jpeg" class="img" alt="Image 4" />
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="carousel-container">
        <img src="/public/carousel/3.jpeg" class="img" alt="Image 4" />
        <img
          v-if="isWideScreen"
          src="/public/carousel/3_3.jpeg"
          class="img"
          alt="Image 4"
        />
      </div>
    </v-carousel-item>
    <v-carousel-item v-if="isWideScreen2">
      <div class="carousel-container">
        <img src="/public/carousel/3_3.jpeg" class="img" alt="Image 4" />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: null,
    };
  },
  computed: {
    isWideScreen() {
      return this.screenWidth >= 900;
    },
    isWideScreen2() {
      return this.screenWidth <= 900;
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;

    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style>
.carousel-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
}
.carousel-container > .img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}

/* عند عرض أقل من 900px */
@media (max-width: 900px) {
  .carousel-container {
    grid-template-columns: auto;
  }
}
.v-carousel__controls {
  display: none;
}
</style>
