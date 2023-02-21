<template>
  <div class="pill-group">
    <div class="pill-group__inner grid">
      <ScrubContainer class="pill-group__main">
        <h2
          class="pill-group__heading heading-style-1"
          v-text="heading"
        />
        <p
          v-if="paragraph"
          class="pill-group__paragraph paragraph-style-1"
          v-text="paragraph"
        />
      </ScrubContainer>
      <div class="pill-group__secondary">
        <div class="pill-group__items">
          <ScrubContainer
            v-for="(item, index) in items"
            class="pill-group__item"
          >
            <h3
              class="heading-style-2"
              v-text="item.heading"
            />
            <div
              class="text-wrap text-wrap--paragraph-style-3"
              v-html="item.paragraphs"
            />
          </ScrubContainer>
        </div>
      </div>
    </div>
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
.pill-group {
  &__main {
    grid-column: span 12 / span 12;

    @include breakpoint(medium) {
      grid-column: span 8 / span 8;
      grid-column-start: 3;
    }

    @include breakpoint(large) {
      grid-column-start: 1;
      grid-column: span 5 / span 5;
      padding-right: 60px;
    }
  }

  &__main + &__secondary {
    margin-top: 60px;

    @include breakpoint(large) {
      margin-top: 100px;
    }

    @include breakpoint(large) {
      margin-top: 0;
    }
  }

  &__secondary {
    grid-column: span 12 / span 12;

    @include breakpoint(large) {
      grid-column: span 7 / span 7;
    }
  }

  &__heading {
    padding: 40px 20px;
    border: 2px solid;
    border-radius: 200px;

    @include breakpoint(medium) {
      padding: 40px 60px;
    }
  }

  &__heading,
  &__paragraph {
    text-align: center;
  }

  &__items {
    @include breakpoint(medium) {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
  }

  &__item {
    padding: 40px 32px 0;
    border-left: 2px solid;

    @include breakpoint(medium) {
      grid-column: span 4 / span 4;
    }

    &:nth-child(1) {
      padding-top: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      @include breakpoint(medium) {
        padding-top: 0;
      }
    }

    .text-wrap p {
      @extend .paragraph-style-3;
    }
  }
}
</style>