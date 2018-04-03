<template>
  <div class="natural">
    <div class="natural-top">
      <Search/>
    </div>
    <ScrollBar :initialIndex="2"/>
    <h1>natural</h1>
    <slot>没有分发内容才显示</slot>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import ScrollBar from '@/components/ScrollBar.vue'
export default {
  components: {
    Search,
    ScrollBar
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
