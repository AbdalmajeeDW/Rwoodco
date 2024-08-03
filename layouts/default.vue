<template>
  <div>
    <Header />
    <v-carousel hide-delimiters cycle interval="3000" height="640">
      <template v-slot:next="{ props }">
        <v-btn color="red" v-bind="props"
          ><v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:prev="{ props }">
        <v-btn color="green" v-bind="props"
          ><v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
      <v-carousel-item
        src="/t8.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="/t7.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="/t3.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
   
    <div>
    <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref('Rwoodco')
const description = ref('My App Description')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>