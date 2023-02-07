<template>
  <Hero />
  <BaseModule
    v-for="(item, index) in components"
    :moduleData="item"
  />
</template>

<script>
import page from '~/assets/data/index.yml';

export default {
  data() {
    return {
      components: page.components,
    };
  },
}
</script>