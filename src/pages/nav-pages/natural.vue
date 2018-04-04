<template>
  <div class="natural">
    <div class="natural-top">
      <Search/>
    </div>
    <keep-alive>
      <Slide/>
    </keep-alive>
    <h1>natural</h1>
    <slot>没有分发内容才显示</slot>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Slide from '@/components/Slide.vue'
export default {
  components: {
    Search,
    Slide
  }
}
</script>

<style>
  .natural {
    box-sizing:border-box;
    padding-bottom: 50px;
    height:100%;
  }

  .natural-top {
    width: 100%;
    display:inline-block;
    box-shadow: 0 1px 10px rgba(0,0,0,0.1);
  }
</style>
