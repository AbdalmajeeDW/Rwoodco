<template>
  <div>
    <v-carousel hide-delimiters cycle interval="3000" height="640">
      <template v-slot:next="{ props }">
        <div v-if="$i18n.locale == 'ar'">
          <v-btn v-bind="props" icon="mdi-arrow-left"></v-btn>
        </div>
        <div v-else>
          <v-btn v-bind="props" icon="mdi-arrow-right"></v-btn>
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
      <v-carousel-item src="/public/1.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/public/2.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/public/3.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/public/4.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/public/5.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/public/6.jpeg" cover></v-carousel-item>
    </v-carousel>
    <div class="container">
      <div class="head_section">{{ $t(`aboutCompany.header`) }}</div>
      <div class="contian_section">
        {{ $t(`aboutCompany.contain`) }}
      </div>
      <div class="sections">
        <v-card class="create">
          <div class="head">{{ $t(`creat.header`) }}</div>
          {{ $t(`creat.contain`) }}
        </v-card>
        <v-card class="scope">
          <div class="head">{{ $t(`vision.header`) }}</div>
          {{ $t(`vision.contain`) }}
        </v-card>
        <v-card class="vuer">
          <div class="head">{{ $t(`target.header`) }}</div>
          <p>{{ $t(`target.contain1`) }}</p>
          <p>{{ $t(`target.contain2`) }}</p>
          <p>{{ $t(`target.contain3`) }}</p>
          <p>{{ $t(`target.contain4`) }}</p>
          <p>{{ $t(`target.contain5`) }}</p>
        </v-card>
        <v-card class="message">
          <div class="head">{{ $t(`message.header`) }}</div>
          {{ $t(`message.contain`) }}
        </v-card>
      </div>
    </div>
    <div class="more">
      <NuxtLink to="/about" class="routeMore"
        ><v-btn class="more">{{ $t(`about.btnMore`) }} </v-btn></NuxtLink
      >
    </div>

    <div class="container">
      <div class="head_section">{{ $t(`Section_projects.head`) }}</div>
      <div class="contian_section">
        {{ $t(`aboutCompany.contain`) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const cards = document.querySelectorAll(".v-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  },
};
</script>
