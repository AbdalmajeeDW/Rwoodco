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
        {{ $t(`Section_projects.contain`) }}
      </div>
      <div class="sections1">
        <div v-for="(project, i) in projects" :key="i">
          <div @click="dialog = !dialog">
            <div class="card" @click="clickCard(project)">
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
          style="width: 70px; margin-inline-end: 4px; margin-top: 10px"
        />
      </v-toolbar>

      <v-card>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            justify-items: center;
            padding-top: 10px;
            padding-bottom: 70px;
          "
        >
          <div v-for="(item, i) in arrayFilter" :key="i">
            <img
              :src="item.img"
              width="400"
              height="400"
              alt=""
              style="border-radius: 5px"
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
      cat: null,
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
      ],
    };
  },
  methods: {
    clickCard(obj) {
      this.cat = obj;
      let n = this.cards.filter((e) => e.categorie === obj.categorie);
      this.arrayFilter = n;
    },
  },
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
