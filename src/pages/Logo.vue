<template>
  <div class="top">
    <span>
      <img class="edu-logo" src="../../static/image/logo.png" width=140/>
      <br/>
      <span class="edu-name">智云教育</span>
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
    font-size: 20px;
    font-weight: 700;
    color:rgba(101, 200, 122);
  }
</style>
