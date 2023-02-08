<template>
  <div class="media-context-section">
    <div class="media-context-section__inner grid">
      <div
        v-for="(item, index) in items"
        class="media-context"
        :class="{'media-context--reversed': item.reversed, 'media-context--micro': item.micro, 'media-conntext--reversed-tab': item.reversedtab}"
      >
        <div class="media-context__image">
          <picture>
            <source media="(min-width:768px)" :srcset="'/images/saxophone.jpg'">
            <img
              class="object-cover"
              :src="'/images/saxophone.jpg'"
              :alt="item.image.alt"
            />
          </picture>
        </div>
        <div class="media-context__context">
          <h2
            class="heading-style-2 text-primary"
            v-text="item.heading"
          />
          <div class="media-context__text text-wrap text-wrap--paragraph-style-3" v-html="item.paragraphs" />
        </div>
      </div>
    </div>
    <div class="media-context-section__inner grid">
      <div class="media-context-section__footer">
        <div class="media-context-section__caption">Queens University of Charlotte</div>
        <div class="media-context-section__caption">Royals Rise</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss">
@use "sass:map";

.media-context-section {
  padding: 96px 0 40px;
  background-color: $navy;

  .section & {
    padding: 0;
  }

  &__inner {
    row-gap: map.get($grid-column-gutter, small);

    @include breakpoint(medium) {
      row-gap: map.get($grid-column-gutter, large);
    }
  }

  &__inner + &__inner {
    margin-top: 100px;

    .section & {
      display: none;
    }
  }

  .media-context {
    grid-column: span 12 / span 12;

    @include breakpoint(large) {
      grid-column: span 6 / span 6;
    }
  }

  &__footer {
    display: flex;
    grid-column: span 12 / span 12;
    justify-content: space-between;

    .section & {
      display: none;
    }
  }

  &__caption {
    font-family: 'grotesk';
    font-size: rem-calc(12px);
    font-weight: 800;
    line-height: 100%;
    text-transform: uppercase;
    color: $neon;
  }
}

.media-context {
  @include breakpoint(medium) {
    display: flex;
  }

  &__image {
    flex-shrink: 0;

    @include breakpoint(medium) {
      width: 350px;
      height: 240px;
      margin: 0 24px 0 0;
    }

    .media-context--reversed & {
      @include breakpoint(medium) {
        margin: 0 0 0 24px;
      }
    }

    .media-conntext--reversed-tab & {
      @include breakpoint(medium) {
        margin: 0 0 0 24px;
      }

      @include breakpoint(large) {
        margin: 0 24px 0 0;
      }
    }

    .media-context--reversed.media-context--micro & {
      @include breakpoint(medium) {
        margin: 0 24px 0 0;
      }

      @include breakpoint(large) {
        margin: 0 0 0 24px;
      }
    }

    .media-context--micro & {
      @include breakpoint(medium) {
        width: 190px;
      }
    }
  }

  &__image + &__context {
    margin-top: 20px;

    @include breakpoint(medium) {
      margin-top: 0;
    }
  }

  &__context {
    @include breakpoint(medium) {
      padding: 0 80px 0 0;
    }

    .media-context--reversed & {
      @include breakpoint(medium) {
        order: -1;
        padding: 0 0 0 80px;
      }
    }

    .media-conntext--reversed-tab & {
      @include breakpoint(medium) {
        order: -1;
      }

      @include breakpoint(large) {
        order: 0;
      }
    }

    .media-context--micro & {
      padding: 0;
    }

    .media-context--reversed.media-context--micro & {
      order: 1;

      @include breakpoint(large) {
        order: -1;
      }
    }
  }

  &__text {
    > p {
      @extend .paragraph-style-3;

      color: $white;
    }
  }
}

.media-context + .media-context {
  margin-top: 40px;

  @include breakpoint(medium) {
    margin-top: 0;
  }
}
</style>