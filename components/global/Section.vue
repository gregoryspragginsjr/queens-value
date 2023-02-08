<template>
  <div class="section">
    <div class="section__inner grid">
      <h2
        class="section__heading heading-style-1"
        :class="{'text-primary': variant == 'neon'}"
        v-text="heading"
      />
    </div>
    <BaseModule
      v-for="(item, index) in components"
      :moduleData="item"
    />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    components: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: 80px 0;
  color: $white;
  background-color: $navy;

  &__inner {
    &.grid {
      margin-bottom: 80px;
    }
  }

  &__heading {
    grid-column: span 12 / span 12;
    text-align: center;
    color: $white;

    @include breakpoint(medium) {
      grid-column: span 8 / span 8;
      grid-column-start: 3;
    }
  }

  > div:not(.grid) + div {
    margin-top: 100px;
  }
}
</style>