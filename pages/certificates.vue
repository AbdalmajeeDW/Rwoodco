<template>
  <div>
    <div class="about_header">
      <div class="img">
        <div class="container">
          <p class="head">{{ $t(`Certificates.certificates`) }}</p>
          <p class="contain">
            {{ $t(`head_about.contain`) }}
          </p>
          <v-btn class="more_head"
            ><NuxtLink to="#certificates" class="routeMore2">{{
              $t(`head_certificates.btn_Cer`)
            }}</NuxtLink></v-btn
          >
        </div>
      </div>
    </div>
    <div class="container" id="certificates">
      <div class="section_certificates">
        <div
          class="certificates"
          v-for="(item, i) in certificates"
          :key="i"
          @click="dialog = !dialog"
        >
          <div class="con_img_certificates" @click="clickCard(item)">
            <img :src="item.url" alt="" />
          </div>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
       
      fullscreen
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

        <v-toolbar-title></v-toolbar-title>
        <img
          src="/logo.png"
          alt="logo"
          style="
            width: 55px;
            height: 55px;
            margin-bottom: 15px;
            margin-inline-end: 20px;
            margin-top: 10px;
          "
        />
      </v-toolbar>

      <v-card>
        <div style="margin-bottom: 60px">
          <div v-for="(item, i) in arrayFilter" :key="i">
            <img
              :src="item.url"
              alt=""
              style="width: 100%; height: 100%; margin-top: 15px"
            />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      arrayFilter: null,
      certificates: [
        {
          id: "1",
          url: "/Certificates/1.jpg",
        },

        {
          id: "5",
          url: "/Certificates/0.jpg",
        },
        {
          id: "0",
          url: "/Certificates/5.jpg",
        },
        {
          id: "8",
          url: "/Certificates/8.jpg",
        },
        {
          id: "9",
          url: "/Certificates/9.jpg",
        },
        {
          id: "10",
          url: "/Certificates/10.jpg",
        },
        {
          id: "11",
          url: "/Certificates/11.jpg",
        },
      ],
    };
  },
  methods: {
    clickCard(obj) {
      this.cat = obj;
      let n = this.certificates.filter((e) => e.id === obj.id);
      this.arrayFilter = n;
    },
  },
};
</script>
