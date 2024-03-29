<template>
  <div class="thumbnail-carousel">
    <ScrubContainer
      v-if="heading"
      class="thumbnail-carousel__inner grid"
    >
      <h2
        class="thumbnail-carousel__heading heading-style-1"
        v-text="heading"
      />
    </ScrubContainer>
    <div class="thumbnail-carousel__inner grid">
      <div class="thumbnail-carousel__controls">
        <ul class="thumbnail-carousel__thumbnails">
          <li
            v-for="(item, index) in items"
            class="thumbnail-carousel__item"
            :class="{'thumbnail-carousel__item--break': item.break}"
          >
            <button
              v-if="item.break !== true"
              @click="activeSlide = item"
              class="thumbnail-carousel__btn"
            >
              <div
                class="thumbnail-carousel__thumbnail"
                :class="{ 'thumbnail-carousel__thumbnail--active': activeSlide == item }"
              >
                <img :src="item.image.src" :alt="item.image.alt" />
                <img :src="item.image.hover" role="presentation" alt="" />
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="thumbnail-carousel__slides">
        <div
          v-for="(item, index) in items"
          class="thumbnail-carousel__slide"
          :class="{'active': activeSlide == item}"
        >
          <h3
            v-if="item.heading"
            class="heading-style-2xl"
            v-text="item.heading"
          />
          <div
            class="text-wrap text-wrap--paragraph-style-1"
            v-html="item.paragraphs"
          />
          <div v-if="item.byline" class="thumbnail-carousel__byline">
            <div
              class="heading-style-2"
              v-text="item.byline.name"
            />
            <div
              class="paragraph-style-3"
              v-text="item.byline.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: undefined,
    };
  },
  props: {
    heading: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    this.activeSlide = this.items[0];
  },
}
</script>

<style lang="scss">
.thumbnail-carousel {
  &__inner + &__inner {
    margin-top: 80px;
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

  &__controls {
    grid-column: span 12 / span 12;

    @include breakpoint(large) {
      grid-column: span 6 / span 6;
    }
  }

  &__controls + &__slides {
    margin-top: 80px;

    @include breakpoint(large) {
      margin-top: 0;
    }
  }

  &__thumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 16px;
    column-gap: 20px;

    @include breakpoint(medium) {
      column-gap: 32px;
    }
  }

  &__item {
    display: inline-block;

    &--break {
      flex-basis: 100%;
      height: 0;
    }
  }

  &__btn {
    appearance: none;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
    transition: $transition-default;

    &:hover {
      opacity: 0.8;
    }
  }

  &__thumbnail {
    position: relative;
    width: 90px;

    @include breakpoint(medium) {
      width: 144px;
    }

    img {
      transition: $transition-default;
    }

    img:nth-child(2) {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(1.14) translateY(-0.9px);
    }

    &--active {
      img:nth-child(1) {
        opacity: 0;
      }

      img:nth-child(2) {
        opacity: 1;
      }
    }
  }

  &__slides {
    position: relative;
    grid-column: span 12 / span 12;
    height: 500px;

    @include breakpoint(medium) {
      height: 260px;
    }

    @include breakpoint(large) {
      grid-column: span 5 / span 5;
      grid-column-start: 8;
      height: auto;
    }
  }

  &__slide {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    color: $white;
    opacity: 0;
    transform: translateY(30px);
    transition: $transition-default;

    @include breakpoint(large) {
      justify-content: center;
    }

    .section--neon-gradient & {
      color: $navy;
    }

    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .text-wrap p {
    @extend .paragraph-style-1;
  }

  &__byline {
    margin-top: 30px;
  }
}
</style>