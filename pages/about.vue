<template>
  <div>
    <div class="about_header">
      <img src="/build1.jpg" alt="" />
      <p class="head">{{ $t(`head_about.head`) }}</p>
      <p class="contain">
        {{ $t(`head_about.contain`) }}
      </p>
      <v-btn class="more_head"
        ><NuxtLink to="#about" class="routeMore2">{{
          $t(`about.btnMore`)
        }}</NuxtLink></v-btn
      >
    </div>
    <div class="container" id="about">
      <!-- <div class="head_section">{{ $t(`aboutCompany.header`) }}</div> -->
      <div class="contian_section">
        <!-- {{ $t(`aboutCompany.contain`) }} -->
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
      <!--  -->
    </div>
    <div class="container">
      <div class="head_section">{{ $t(`rate.rateUs`) }}</div>

      <div class="sections">
        <v-card class="create">
          <div class="head">{{ $t(`leadership.header`) }}</div>
          {{ $t(`leadership.contain`) }}
        </v-card>
        <v-card class="scope">
          <div class="head">{{ $t(`Responsibility.header`) }}</div>
          {{ $t(`Responsibility.contain`) }}
        </v-card>
        <v-card class="vuer">
          <div class="head">{{ $t(`Franchise.header`) }}</div>
          <p>{{ $t(`Franchise.contain`) }}</p>
        </v-card>
        <v-card class="message">
          <div class="head">{{ $t(`Integrity.header`) }}</div>
          {{ $t(`Integrity.contain`) }}
        </v-card>
        <v-card class="message">
          <div class="head">{{ $t(`Professionalism.header`) }}</div>
          {{ $t(`Professionalism.contain`) }}
        </v-card>
        <v-card class="message">
          <div class="head">{{ $t(`Commitment.header`) }}</div>
          {{ $t(`Commitment.contain`) }}
        </v-card>
      </div>
    </div>
    <div class="container">
      <div class="head_section">{{ $t(`SafetyandQuality.header`) }}</div>

      <div class="sections">
        <v-card class="message">
          <div class="head">{{ $t(`Quality.header`) }}</div>
          {{ $t(`Quality.contain`) }}
        </v-card>

        <v-card class="message">
          <div class="head">{{ $t(`Safety.header`) }}</div>
          {{ $t(`Safety.contain`) }}
        </v-card>
      </div>
    </div>
  </div>
</template>
