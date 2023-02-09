<template>
  <div class="divider">
    <div class="grid">
      <SvgSquiggle />
    </div>
  </div>
</template>

<style lang="scss">
.divider {
  .squiggle {
    grid-column: span 12 / span 12;

    .squiggle__window {
      margin: 0 auto;
    }
  }
}
</style>