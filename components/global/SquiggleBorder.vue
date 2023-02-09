<template>
  <div class="squiggle-divider">
    <div class="grid">
      <SvgSquiggle />
    </div>
  </div>
</template>

<style lang="scss">
.squiggle-divider {
  .squiggle {
    grid-column: span 12 / span 12;

    .squiggle__window {
      margin: 0 auto;
    }
  }
}
</style>