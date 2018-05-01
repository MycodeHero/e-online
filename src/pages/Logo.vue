<template>
  <div class="top">
    <span>
      <!-- <img class="edu-logo" src="../../static/image/logo.png" width=140/>
      <br/> -->
      <span class="edu-name">云智教育</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
  .top {
    position: relative;
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:50%;
  }
  .edu-name {
    font-size: 40px;
    /* font-weight: 700; */
    color:white;
    text-align:center;
    letter-spacing: 24px;
    margin-left: 24px;
    font-family:'Source-Han-Ligh11bc0f8f7617174';
  }
</style>
