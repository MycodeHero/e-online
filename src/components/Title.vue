<template>
  <div class="title-top" ref="title">{{content}}</div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 50
    },
    content: {
      type: String,
      default: '设置标题'
    }
  },
  mounted () {
    this.$refs.title.style.height = this.height + 'px'
  }
}
</script>

<style>
  .title-top {
    display: flex;
    width: 100%;
    background: white;
    box-shadow: 0 1px 10px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
</style>
