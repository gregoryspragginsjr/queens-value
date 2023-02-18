<template>
  <div class="divider">
    <div class="divider__main">
      <div class="divider__royals heading-style-2">Royals</div>
      <div class="divider__rise heading-style-2">Rise</div>
    </div>
  </div>
</template>

<style lang="scss">
.divider {
  height: 0;
  overflow: visible;

  &__main {
    display: flex;
    justify-content: space-between;
    padding: 4px 50px 0;
    transform: translateY(-50%);
    background: linear-gradient(90deg, $gold 0%, $neon 100%);
    clip-path: polygon(5% 0, 100% 0, 100% 50%, 95% 100%, 0 100%, 0% 50%);

    @include breakpoint(medium) {
      clip-path: polygon(1% 0, 100% 0, 100% 50%, 99% 100%, 0 100%, 0% 50%);
    }
  }

  &__royals {
    color: $neon;
  }

  &__rise {
    color: $gold;
  }
}
</style>