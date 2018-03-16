<template>
  <div class="mask">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MaskLayer'
}
</script>

<style scoped>
  .mask{
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background:rgba(0,0,0,0.5);
  }
</style>
