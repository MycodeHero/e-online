<template>
    <div class="scroll-bar">
      <div class="content">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    height: String,
    'initial-index': {
      type: Number,
      default: 0
    },
    autoplay: Boolean,
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    let scroll = new BScroll('.scroll-bar', {
      startX: 0,
      scrollX: true,
      scrollY: false,
      // snap: true,
      // snapLoop: true,
      // snapSpeed: 400,
      // // swipeTime: 2500,
      // snapThreshold: 0.1,
      // snap: {
      //   loop: true,
      // }
      // snap: true,
      stopPropagation: true
    })
    // scroll.on('touchEnd', function () {
    //   scroll.next()
    // })
    console.log(scroll)
  }
}
</script>

<style>
  .scroll-bar {
    width: 100%;
    height: 125px;
    background: red;
  }

  .content {
    display: flex;
    width: 500%;
    height: 100%;
  }
  .content li{
    flex-grow: 1;
    height: 100%;
  }
  .content li {
    text-align: center;
    line-height: 125px;
  }
</style>
