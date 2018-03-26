<template>
  <div class="natural">
    <div class="natural-top">
      <Search/>
    </div>
    <h1>natural</h1>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  components: {
    Search
  }
}
</script>

<style>
  .natural {
    box-sizing:border-box;
    padding-bottom: 50px;
    height:100%;
  }
</style>
