<template>
  <div>
    <div>
      <CarouselHero />
    </div>

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
        {{ $t(`Section_projects.contain`) }}
      </div>
      <div class="sections1">
        <div v-for="(project, i) in projects" :key="i">
          <div @click="dialog = !dialog" class="con">
            <div class="card" @click="clickCard(project)">
              <div class="details">
                <v-icon @click.stop="showCaption(i)"> mdi-alert-circle-outline </v-icon>
              </div>
              <img :src="project.img" alt="" />
              <div class="caption" v-if="activeCaption === i">
                <p>
                  {{ $t(`${project.caption}`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <NuxtLink to="/projects" class="routeMore"
          ><v-btn class="more">{{ $t(`about.btnMore`) }} </v-btn></NuxtLink
        >
      </div>
    </div>
    <v-dialog v-model="dialog" fullscreen :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

        <v-toolbar-title>{{ $t(`${cat.titleProject}`) }}</v-toolbar-title>
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
        <div class="con_img">
          <div v-for="(item, i) in arrayFilter" :key="i">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </v-card>
    </v-dialog>
    <div class="container">
      <div class="head_section">{{ $t(`Section_Services.head`) }}</div>

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
      </div>
      <div class="more">
        <NuxtLink to="/services" class="routeMore"
          ><v-btn class="more">{{ $t(`about.btnMore`) }} </v-btn></NuxtLink
        >
      </div>
    </div>
    <!--  -->

    <div class="container">
      <div class="head_section">{{ $t(`Certificates.certificates`) }}</div>

      <div class="section_certificates">
        <div
          class="certificates"
          v-for="(item, i) in certificates"
          :key="i"
          @click="dialog1 = !dialog1"
        >
          <div class="con_img_certificates" @click="clickCertificates(item)">
            <img :src="item.url" alt="" />
          </div>
        </div>
      </div>
      <div class="more">
        <NuxtLink to="/certificates" class="routeMore"
          ><v-btn class="more">{{ $t(`about.btnMore`) }} </v-btn></NuxtLink
        >
      </div>
    </div>
    <v-dialog v-model="dialog1" fullscreen :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog1 = false"></v-btn>

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
    <div class="container">
      <div class="head_section">{{ $t(`Section_clients.head`) }}</div>

      <div class="section_clients">
        <div class="clients">
          <img src="/logos/pngkey.png" width="200px" alt="" />
        </div>
        <div class="clients">
          <img src="/logos/Bank_Albilad_logo.png" width="200px" alt="" />
        </div>
        <div class="clients">
          <img src="/logos/The-Saudi-Investment-Bank.png" width="200px" alt="" />
        </div>
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>
<script>
import cards from "~/common/cards";
import project_array from "~/common/projects";
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      notifications: false,
      sound: true,
      widgets: false,
      activeCaption: null,

      arrayFilter: null,
      cat: null,
      form: {
        name: "",
        email: "",
        message: "",
      },
      projects: project_array,
      cards: cards,
      certificates: [
        {
          id: "1",
          url: "/Certificates/1.jpg",
        },
        {
          id: "2",
          url: "/Certificates/10.jpg",
        },
        {
          id: "3",
          url: "/Certificates/11.jpg",
        },
      ],
    };
  },
  methods: {
    showCaption(index) {
      if (this.activeCaption === index) {
        this.activeCaption = null; //
      } else {
        this.activeCaption = index; //
      }
    },
    clickCard(obj) {
      this.cat = obj;
      let n = this.cards.filter((e) => e.categorie === obj.categorie);
      this.arrayFilter = n;
    },
    clickCertificates(obj) {
      this.cat = obj;
      let n = this.certificates.filter((e) => e.id === obj.id);
      this.arrayFilter = n;
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
  },
  mounted() {
    const cards = document.querySelectorAll(".v-card");
    const projects = document.querySelectorAll(".sections1  .con");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // هنا نتأكد من أن العنصر قد ظهر بالفعل في العرض
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            // إعادة إخفاء العنصر عند الخروج من العرض
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(20px)";
          }
        });
      },
      {
        threshold: 0.1, // يمكن تعديل النسبة حسب الحاجة
      }
    );

    cards.forEach((card) => {
      // ضبط الأنماط الافتراضية قبل مراقبة العنصر
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(card);
    });

    projects.forEach((project) => {
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
      project.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(project);
    });
  },
};
</script>
