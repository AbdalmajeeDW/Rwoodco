<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="con_define">
          <div class="define">
            <img src="/888.png" width="200" />
          </div>
        </div>
        <div class="services2">
          <div class="title">{{ $t(`links.services`) }}</div>

          <p>{{ $t(`Section_Services.Service1.head`) }}</p>
          <p>{{ $t(`Section_Services.Service2.head`) }}</p>
          <p>{{ $t(`Section_Services.Service3.head`) }}</p>
          <p>{{ $t(`Section_Services.Service4.head`) }}</p>
          <p>{{ $t(`Section_Services.Service5.head`) }}</p>
        </div>
        <div class="lin">
          <div class="con_links">
            <div class="title">{{ $t(`links.siteSeection`) }}</div>

            <ul class="links" v-for="(item, i) in items" :key="i">
              <li>
                <NuxtLink :to="item.url" :target="item.target">{{
                  $t(`links.${item.name}`)
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="con_info" id="contact">
          <ul class="infoo">
            <div class="title">{{ $t(`links.contact`) }}</div>

            <li>
              <div class="map">
                <v-icon>mdi-map-marker-circle</v-icon>

                <p style="line-height: 1.1">{{ $t(`locationFooter.location`) }}</p>
              </div>
            </li>
            <li>
              <div><v-icon>mdi-phone-classic</v-icon>+966 11250 0511</div>
            </li>
            <li>
              <div>
                <v-icon>mdi-gmail</v-icon>
                Info@red-wood.site
              </div>
            </li>
            <li>
              <div><v-icon>mdi-cellphone</v-icon>+966 56859 4572</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <img src="/logoWhite.png" class="copyrightImg" />

      {{ $t(`Copyright.head`) }}
      <ul class="social-media">
        <li>
          <a href="https://www.instagram.com/rwoodco_?igsh=MTV0Y2N3d2l1b2kxcA==">
            <span class="mdi mdi-instagram" style="color: white; font-size: 23px"></span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61559025317626&mibextid=ZbWKwL"
            ><span
              id="face"
              class="mdi mdi-facebook"
              style="color: white; font-size: 23px"
            ></span
          ></a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@rwoodco3?fbclid=IwY2xjawEt1QJleHRuA2FlbQIxMAABHSsss6Bmbui9pqH0_BqaF6qX7seEUpGmEw4SYMQHmtBJYsfooFEk_CC8lg_aem_Ixu3-depxtf4yHR0OJsO_g"
          >
            <img
              src="/888.svg"
              alt=""
              style="width: 21px; height: 21px; margin-top: 4px"
            />
          </a>
        </li>
        <!-- 
        <li>
          <a href="info@red-wood.site">
            <v-icon style="color: white; font-size: 22px">mdi-gmail</v-icon>
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      check: false,
      items: [
        {
          name: "home",
          url: "/",
        },
        {
          name: "about",
          url: "/about",
        },
        {
          name: "projects",
          url: "/projects",
        },
        {
          name: "services",
          url: "/services",
        },

        {
          name: "contact",
          url: "/contact",
        },
        {
          name: "profile",
          url: "/RWOODCO-PROFILE.pdf",
          target: "_balnk",
        },
      ],
    };
  },
};
</script>
