<template>
  <div class="card-select">
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '查看'
    }
  }
}
</script>

<style>
  .card-select {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .card-select span {
    display: inline-block;
    width:40px;
    height:22px;
    border-radius:11px;
    background: rgb(240, 239, 246);
    padding: 0 10px;
    font-size:12px;
    line-height: 22px;
  }
</style>
