<template>
  <div>
    <div class="about_header">
      <div class="img">
        <p class="head">{{ $t(`head_project.head`) }}</p>
        <p class="contain">
          {{ $t(`head_about.contain`) }}
        </p>
        <v-btn class="more_head"
          ><NuxtLink to="#about" class="routeMore2">{{
            $t(`head_project.btn_pro`)
          }}</NuxtLink></v-btn
        >
      </div>
    </div>
  </div>
</template>
