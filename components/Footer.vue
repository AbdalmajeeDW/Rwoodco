<template>
  <div class="con_footer">
    <div class="footer">
      <div class="section_one">
        <img src="/logo.png" width="150" alt="" />
        <div class="icons">
          <nuxt-link to="" class="insta"> <img src="/instagram.png" alt="" /></nuxt-link>
          <nuxt-link to="">
            <img src="/facebook.png" alt="" />
          </nuxt-link>
          <nuxt-link to="">
            <img src="/tiktok.png" width="25" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="copyright">{{ $t(`Copyright.head`) }}</div>
  </div>
</template>
<script>
export default {};
</script>
