<template>
  <div class="pill-group-section">
    <PillGroup
      :heading="heading"
      :paragraph="paragraph"
      :items="items"
    />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.pill-group-section {
  padding: 100px 0;
  color: $navy;
  background-color: $periwinkle;
}

.pill-group-section + .pill-group-section {
  margin-top: 0;
}
</style>