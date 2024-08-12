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
      <v-carousel-item src="/bank_jdah2/1.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/bank_jbeel/3.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/public/2.jpeg" cover></v-carousel-item>

      <v-carousel-item src="/public/3.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/public/4.jpeg" cover></v-carousel-item>
      <v-carousel-item src="/public/5.jpeg" cover></v-carousel-item>
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
        {{ $t(`Section_projects.contain`) }}
      </div>
      <div class="sections1">
        <div v-for="(project, i) in projects" :key="i">
          <div @click="dialog = !dialog" class="con">
            <div class="card" @click="clickCard(project)">
              <div class="details">
                <v-icon> mdi-alert-circle-outline </v-icon>
              </div>
              <img :src="project.img" alt="" />
              <div class="caption">
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
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
      :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    >
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

        <v-toolbar-title>{{ $t(`${cat.titleProject}`) }}</v-toolbar-title>
        <img
          src="/logo.png"
          alt="logo"
          style="width: 70px; margin-inline-end: 20px; margin-top: 10px"
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
    <div class="container">
      <!-- <div class="head_section">{{ $t(`Section_Services.head`) }}</div> -->
      <div>
        <!-- <h1>تواصل معنا</h1> -->
        <!-- <form @submit.prevent="sendEmail">
          <div>
            <label for="name">الاسم:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div>
            <label for="email">البريد الإلكتروني:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div>
            <label for="message">الرسالة:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">إرسال</button>
        </form> -->
      </div>
    </div>
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
      cat: null,
      form: {
        name: "",
        email: "",
        message: "",
      },
      projects: [
        {
          id: "1",
          img: "mosque/1.jpeg",
          categorie: "mosque",
          titleProject: "projects_card.project_4.titleProject",
          caption: "projects_card.project_4.caption",
        },
        {
          id: "2",
          img: "bank_jdah/1.jpeg",
          categorie: "bank_jdah",
          titleProject: "projects_card.project_1.titleProject",
          caption: "projects_card.project_1.caption",
        },
        {
          id: "3",
          img: "lcd/2.jpeg",
          categorie: "lcd",
          titleProject: "projects_card.project_2.titleProject",
          caption: "projects_card.project_2.caption",
        },
        {
          id: "4",
          img: "bank_jbeel/3.jpeg",
          categorie: "bank_jbeel",
          titleProject: "projects_card.project_3.titleProject",
          caption: "projects_card.project_3.caption",
        },
        {
          id: "5",
          img: "bank_jdah2/1.jpeg",
          categorie: "bank_jdah2",
          titleProject: "projects_card.project_5.titleProject",
          caption: "projects_card.project_5.caption",
        },
        {
          id: "5",
          img: "center_helth/9.jpeg",
          categorie: "center_helth",
          titleProject: "projects_card.project_6.titleProject",
          caption: "projects_card.project_6.caption",
        },
      ],
      cards: [
        {
          id: "1",
          img: "bank_jdah/1.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "2",
          img: "bank_jdah/2.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "3",
          img: "bank_jdah/3.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "4",
          img: "bank_jdah/4.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "5",
          img: "bank_jdah/5.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "6",
          img: "bank_jdah/6.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "7",
          img: "bank_jdah/7.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "8",
          img: "bank_jdah/8.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "9",
          img: "bank_jdah/9.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "11",
          img: "bank_jdah/11.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "12",
          img: "bank_jdah/12.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "13",
          img: "bank_jdah/13.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "14",
          img: "bank_jdah/14.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "15",
          img: "bank_jdah/15.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "16",
          img: "bank_jdah/16.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "17",
          img: "bank_jdah/17.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "18",
          img: "bank_jdah/18.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "19",
          img: "bank_jdah/19.jpeg",
          categorie: "bank_jdah",
        },
        {
          id: "1",
          img: "lcd/1.jpeg",
          categorie: "lcd",
        },
        {
          id: "2",
          img: "lcd/2.jpeg",
          categorie: "lcd",
        },
        {
          id: "3",
          img: "lcd/3.jpeg",
          categorie: "lcd",
        },
        {
          id: "1",
          img: "bank_jbeel/1.jpeg",
          categorie: "bank_jbeel",
        },
        {
          id: "2",
          img: "bank_jbeel/2.jpeg",
          categorie: "bank_jbeel",
        },
        {
          id: "3",
          img: "bank_jbeel/3.jpeg",
          categorie: "bank_jbeel",
        },
        {
          id: "4",
          img: "bank_jbeel/4.jpeg",
          categorie: "bank_jbeel",
        },
        {
          id: "1",
          img: "mosque/1.jpeg",
          categorie: "mosque",
        },
        {
          id: "2",
          img: "mosque/2.jpeg",
          categorie: "mosque",
        },
        {
          id: "3",
          img: "mosque/3.jpeg",
          categorie: "mosque",
        },
        {
          id: "4",
          img: "mosque/4.jpeg",
          categorie: "mosque",
        },
        {
          id: "5",
          img: "mosque/5.jpeg",
          categorie: "mosque",
        },
        {
          id: "1",
          img: "bank_jdah2/1.jpeg",
          categorie: "bank_jdah2",
        },
        {
          id: "2",
          img: "bank_jdah2/2.jpeg",
          categorie: "bank_jdah2",
        },
        {
          id: "3",
          img: "bank_jdah2/3.jpeg",
          categorie: "bank_jdah2",
        },
        {
          id: "4",
          img: "bank_jdah2/4.jpeg",
          categorie: "bank_jdah2",
        },
        {
          id: "5",
          img: "bank_jdah2/5.jpeg",
          categorie: "bank_jdah2",
        },
        {
          id: "1",
          img: "center_helth/1.jpeg",
          categorie: "center_helth",
        },
        {
          id: "2",
          img: "center_helth/2.jpeg",
          categorie: "center_helth",
        },
        {
          id: "3",
          img: "center_helth/3.jpeg",
          categorie: "center_helth",
        },
        {
          id: "4",
          img: "center_helth/4.jpeg",
          categorie: "center_helth",
        },
        {
          id: "5",
          img: "center_helth/5.jpeg",
          categorie: "center_helth",
        },
        {
          id: "6",
          img: "center_helth/6.jpeg",
          categorie: "center_helth",
        },
        {
          id: "7",
          img: "center_helth/7.jpeg",
          categorie: "center_helth",
        },
        {
          id: "8",
          img: "center_helth/8.jpeg",
          categorie: "center_helth",
        },
        {
          id: "9",
          img: "center_helth/9.jpeg",
          categorie: "center_helth",
        },
      ],
    };
  },
  methods: {
    // async sendEmail() {
    //   try {
    //     this.$axios.$post("/api/send-email", this.form);
    //     alert("تم إرسال البريد الإلكتروني بنجاح!");
    //   } catch (error) {
    //     alert("حدث خطأ أثناء إرسال البريد الإلكتروني.");
    //   }
    // },
    clickCard(obj) {
      this.cat = obj;
      let n = this.cards.filter((e) => e.categorie === obj.categorie);
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
    projects.forEach((card) => {
      observer.observe(card);
    });
  },
};
</script>
