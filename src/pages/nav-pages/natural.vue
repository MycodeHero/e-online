<template>
  <div class="natural">
    <div class="natural-top">
      <Search/>
    </div>
    <keep-alive>
      <Slide/>
    </keep-alive>
    <div class="natural-list" ref="n_list">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Slide from '@/components/Slide.vue'
import Card from '@/components/Card.vue'
export default {
  components: {
    Search,
    Slide,
    Card
  },
  mounted () {
    this.$refs.n_list.style.height = (window.innerHeight - 230) + 'px'
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

  .natural-list {
    overflow: scroll;
  }

  .card:last-child::after {
    display: none;
  }
</style>
