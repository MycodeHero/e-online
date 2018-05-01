<template>
  <div class="item" ref="item">
    <i :class="[type]" v-if="showIcon"></i>
    <i class="head" v-else>
      <img :src="imgUrl"/>
    </i>
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
  props: {
    height: String,
    content: {
      type: String,
      default: '请添加内容'
    },
    type: {
      type: String,
      default: 'favor'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    imgUrl: String
  },
  mounted () {
    this.$refs.item.style.height = this.height + 'px'
  }
}
</script>

<style>
  .item {
    display:flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: white;
    box-shadow: 0 0 10px rgba(231, 230, 237, 0.8)
  }

  .item i {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 15px;
    background-size: 100%;
  }

  .item .head {
    position: relative;
    display: inline-block;
    width:50px;
    height: 50px;
    border-radius: 50%;
    overflow:hidden;
    box-shadow: 0 0 20px 2px rgba(101, 200, 122);
  }

  .head img{
    width: 100%;
    height: 100%;
  }

  .favor {
    background: url('../../static/image/favor.png') no-repeat;
  }

  .collect {
    background: url('../../static/image/collect.png') no-repeat;
  }

  .learn {
    background: url('../../static/image/learn.png') no-repeat;
  }

  .sign {
    background: url('../../static/image/sign.png') no-repeat;
  }

  .warn {
    background: url('../../static/image/warn.png') no-repeat;
  }

  .set {
    background: url('../../static/image/set.png') no-repeat;
  }

  .plan{
    background: url('../../static/image/warn.png') no-repeat;
  }
</style>
