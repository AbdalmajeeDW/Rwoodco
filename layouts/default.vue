<template>
  <div>
    <Header />

    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
const title = ref("Rwoodco");
const description = ref("My App Description");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
