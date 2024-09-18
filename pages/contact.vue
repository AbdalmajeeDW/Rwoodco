<template>
  <div class="container">
    <div class="con_contact">
      <div class="con_info">
        <ul class="infoo">
          <li>
            <div class="map">
              <v-icon>mdi-map-marker-circle</v-icon>

              <p style="line-height: 1.1">
                {{ $t(`locationFooter.location`) }}
              </p>
            </div>
          </li>
          <li>
            <div>
              <v-icon>mdi-phone-classic</v-icon>{{ $t(`locationFooter.numberOne`) }}
            </div>
          </li>
          <li>
            <a href="mailto:Info@red-wood.site">
              <v-icon>mdi-gmail</v-icon>
              Info@red-wood.site
            </a>
          </li>
          <li>
            <a href="https://wa.me/+966568594572">
              <div>
                <v-icon>mdi-whatsapp</v-icon>

                {{ $t(`locationFooter.numberTwo`) }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="locationForMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.911502591665!2d46.782288300000005!3d24.7984837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff007e0197ff%3A0x516cfa42bfdc03fc!2z2LTYsdmD2Kkg2KfZhNiu2LTYqCDYp9mE2KfYrdmF2LEg2YTZhNmF2YLYp9mI2YTYp9iqINin2YTYudin2YXYqSBSV09PRENP!5e0!3m2!1sar!2s!4v1723910333287!5m2!1sar!2s"
          style="border: 0; margin-top: 35px; border-radius: 10px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
