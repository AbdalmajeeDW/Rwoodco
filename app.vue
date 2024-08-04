<template>
  <v-app :class="$i18n.locale=='en' ?'en':'ar'">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>