<template>
  <div
    class="overview"
    :class="{'overview--blue': variant == 'blue'}"
  >
    <div class="overview__main">
      <SvgCrown v-if="variant == 'default'" class="overview__crown" />
      <SvgCircle v-if="variant == 'default'" class="overview__circle" />
      <SvgCandy v-if="variant == 'blue'" class="overview__candy" />
      <SvgTree v-if="variant == 'blue'" class="overview__circle" />
      <div class="overview__inner grid">
        <div class="overview__intro">
          <div
            class="heading-style-2"
            v-text="subheading"
          />
          <h2
            class="heading-style-1"
            v-text="heading"
          />
          <SvgSquiggle class="overview__squiggle" />
          <div
            class="text-wrap text-wrap--paragraph-style-1"
            v-html="paragraphs"
          />
        </div>
      </div>
      <div class="overview__inner grid">
        <div class="overview__items">
          <div
            v-for="(item, index) in items"
            class="overview__item"
          >
            <div class="overview__column">
              <h3
                class="heading-style-2"
                v-text="item.heading"
              />
              <div
                v-if="item.subheading"
                class="paragraph-style-1"
                v-text="item.subheading"
              />
            </div>
            <div
              class="overview__column text-wrap--paragraph-style-3"
              v-html="item.paragraphs"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: 'default',
    },
    subheading: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    paragraphs: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true
    },
  }
}
</script>

<style lang="scss">
.overview {
  padding: 40px 24px;
  color: $navy;
  background: linear-gradient(180deg, $neon 0%, $gold 40.1%, $gold 100%);

  &--blue {
    background: linear-gradient(180deg, $periwinkle 0%, $navy 40.1%, $navy 100%);
  }

  @include breakpoint(medium) {
    padding: 40px;
  }

  &__main {
    position: relative;
    padding: 80px 0;
    background-color: $white;

    @include breakpoint(large) {
      padding: 80px 60px;
    }
  }

  &__crown,
  &__circle,
  &__candy {
    position: absolute;
    top: 30px;
    width: 30px;
    fill: $navy;

    @include breakpoint(medium) {
      top: 42px;
    }
  }

  &__crown,
  &__candy {
    left: 30px;

    @include breakpoint(medium) {
      left: 64px;
    }
  }

  &__circle {
    right: 30px;

    @include breakpoint(medium) {
      right: 64px;
    }
  }

  &__candy {
    width: 40px;
  }

  &__inner + &__inner {
    margin-top: 100px;
  }

  &__intro {
    grid-column: span 12 / span 12;
    text-align: center;

    @include breakpoint(medium) {
      grid-column: span 10 / span 10;
      grid-column-start: 2;
    }

    @include breakpoint(large) {
      padding: 0 60px;
    }
  }

  &__squiggle {
    margin: 60px auto;
    stroke: $navy;
  }

  &__items {
    grid-column: span 12 / span 12;
    border-bottom: 2px solid $navy;

    @include breakpoint(medium) {
      grid-column: span 10 / span 10;
      grid-column-start: 2;
    }

    @include breakpoint(large) {
      grid-column: span 12 / span 12;
      grid-column-start: 1;
    }
  }

  &__item {
    padding: 32px 0;
    border-top: 2px solid $navy;

    @include breakpoint(large) {
      display: flex;
    }
  }

  &__column {
    @include breakpoint(large) {
      flex-grow: 1;
      width: 50%;
    }
  }

  &__column + &__column {
    margin-top: 24px;

    @include breakpoint(large) {
      margin-top: 0;
    }
  }
}
</style>