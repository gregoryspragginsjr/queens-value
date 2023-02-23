<template>
  <div
    class="section"
    :class="{'section--neon-gradient': variant == 'neon-gradient'}"
  >
    <ScrubContainer
      v-if="heading"
      class="section__inner grid"
    >
      <h2
        class="section__heading heading-style-1"
        :class="{'text-primary': variant == 'neon'}"
        v-text="heading"
      />
    </ScrubContainer>
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
      required: false,
    },
    heading: {
      type: String,
      required: false,
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
  padding: 120px 0;
  color: $white;
  background: $navy;

  &--neon-gradient {
    background: linear-gradient(180deg, $white 35.42%, #eceda3 100%);
    
    .squiggle {
      stroke: $navy;
    }
  }

  &__inner {
    &.grid {
      margin-bottom: 80px;
    }
  }

  &__heading {
    grid-column: span 12 / span 12;
    text-align: center;
    color: $white;

    .section--neon-gradient & {
      color: $navy;
    }

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