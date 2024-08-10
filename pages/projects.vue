<template>
  <div>
    <div class="about_header">
      <div class="img">
        <p class="head">{{ $t(`head_project.head`) }}</p>
        <p class="contain">
          {{ $t(`head_about.contain`) }}
        </p>
        <v-btn class="more_head"
          ><NuxtLink to="#Projects" class="routeMore2">{{
            $t(`head_project.btn_pro`)
          }}</NuxtLink></v-btn
        >
      </div>
    </div>
    <div class="container">
      <div id="Projects"></div>
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
        <div class="con_img">
          <div v-for="(item, i) in arrayFilter" :key="i">
            <img :src="item.img" alt="" />
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
        {
          id: "5",
          img: "bank_jdah2/1.jpeg",
          categorie: "bank_jdah2",
          titleProject: "projects_card.project_5.titleProject",
          caption: "projects_card.project_5.caption",
        },
        {
          id: "6",
          img: "center_helth/9.jpeg",
          categorie: "center_helth",
          titleProject: "projects_card.project_6.titleProject",
          caption: "projects_card.project_6.caption",
        },

        {
          id: "7",
          img: "door_bank/9.jpeg",
          categorie: "door_bank",
          titleProject: "projects_card.project_7.titleProject",
          caption: "projects_card.project_7.caption",
        },
        {
          id: "8",
          img: "data_c/1.jpeg",
          categorie: "data_c",
          titleProject: "projects_card.project_8.titleProject",
          caption: "projects_card.project_8.caption",
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
        {
          id: "1",
          img: "door_bank/1.jpeg",
          categorie: "door_bank",
        },
        {
          id: "2",
          img: "door_bank/2.jpeg",
          categorie: "door_bank",
        },
        {
          id: "3",
          img: "door_bank/3.jpeg",
          categorie: "door_bank",
        },
        {
          id: "4",
          img: "door_bank/4.jpeg",
          categorie: "door_bank",
        },

        {
          id: "5",
          img: "door_bank/5.jpeg",
          categorie: "door_bank",
        },
        {
          id: "6",
          img: "door_bank/6.jpeg",
          categorie: "door_bank",
        },
        {
          id: "7",
          img: "door_bank/7.jpeg",
          categorie: "door_bank",
        },
        {
          id: "8",
          img: "door_bank/8.jpeg",
          categorie: "door_bank",
        },

        {
          id: "9",
          img: "door_bank/9.jpeg",
          categorie: "door_bank",
        },
        {
          id: "10",
          img: "door_bank/10.jpeg",
          categorie: "door_bank",
        },
        {
          id: "11",
          img: "door_bank/11.jpeg",
          categorie: "door_bank",
        },
        {
          id: "12",
          img: "door_bank/12.jpeg",
          categorie: "door_bank",
        },
        {
          id: "13",
          img: "door_bank/13.jpeg",
          categorie: "door_bank",
        },
        {
          id: "14",
          img: "door_bank/14.jpeg",
          categorie: "door_bank",
        },
        {
          id: "15",
          img: "door_bank/15.jpeg",
          categorie: "door_bank",
        },
        {
          id: "1",
          img: "data_c/1.jpeg",
          categorie: "data_c",
        },
        {
          id: "2",
          img: "data_c/2.jpeg",
          categorie: "data_c",
        },
        {
          id: "3",
          img: "data_c/3.jpeg",
          categorie: "data_c",
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
