<template>
  <v-app :class="$i18n.locale=='en' ?'en':'ar'">
    <NuxtLayout  theme="light">
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>