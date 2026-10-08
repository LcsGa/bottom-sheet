<template>
  <dialog class="ui-bottom-sheet">
    <div class="snappoint snapclose"></div>
    <div class="snappoint snapdefault"></div>
    <div class="snappoint snapfull"></div>

    <div class="content">
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
.ui-bottom-sheet {
  background: unset;
  box-shadow: unset;
  padding: 0;
  margin: 0;
  scroll-snap-type: y mandatory;

  > .snappoint {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  > .snapclose {
    block-size: 100dvh;
  }

  > .snapdefault {
    block-size: 50dvh;
  }

  > .snapfull {
    block-size: 45dvh;
  }

  > .content {
    padding: var(--size-4);
    border-radius: var(--radius-3) var(--radius-3) 0 0;
    background: var(--gray-11);
  }
}
</style>
