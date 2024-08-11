<template>
  <div>
    <div class="about_header">
      <div class="img">
        <p class="head">{{ $t(`Section_Services.head`) }}</p>
        <p class="contain">
          {{ $t(`head_Services.contain`) }}
        </p>
        <v-btn class="more_head"
          ><NuxtLink to="#Services" class="routeMore2">{{
            $t(`head_Services.btn_pro`)
          }}</NuxtLink></v-btn
        >
      </div>
    </div>
    <div class="container" id="Services">
      <div class="section_services">
        <div class="service">
          <div class="con">
            <div class="backIcon">
              <v-icon> mdi-home </v-icon>
            </div>
          </div>
          <div class="caption">
            <div class="title_card_services">
              {{ $t(`Section_Services.Service1.head`) }}
            </div>
            <p>
              {{ $t(`Section_Services.Service1.contain`) }}
            </p>
          </div>
        </div>
        <div class="service">
          <div class="con">
            <div class="backIcon">
              <v-icon> mdi-forklift </v-icon>
            </div>
          </div>
          <div class="caption">
            <div class="title_card_services">
              {{ $t(`Section_Services.Service2.head`) }}
            </div>
            <p>
              {{ $t(`Section_Services.Service2.contain`) }}
            </p>
          </div>
        </div>
        <div class="service">
          <div class="con">
            <div class="backIcon">
              <v-icon> mdi-pipe </v-icon>
            </div>
          </div>
          <div class="caption">
            <div class="title_card_services">
              {{ $t(`Section_Services.Service3.head`) }}
            </div>
            <p>
              {{ $t(`Section_Services.Service3.contain`) }}
            </p>
          </div>
        </div>
        <div class="service">
          <div class="con">
            <div class="backIcon">
              <v-icon> mdi-format-paint </v-icon>
            </div>
          </div>
          <div class="caption">
            <div class="title_card_services">
              {{ $t(`Section_Services.Service4.head`) }}
            </div>
            <p>
              {{ $t(`Section_Services.Service4.contain`) }}
            </p>
          </div>
        </div>
        <div class="service">
          <div class="con">
            <div class="backIcon">
              <v-icon> mdi-parking </v-icon>
            </div>
          </div>
          <div class="caption">
            <div class="title_card_services">
              {{ $t(`Section_Services.Service5.head`) }}
            </div>
            <p>
              {{ $t(`Section_Services.Service5.contain`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
