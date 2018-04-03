<template>
    <div class="scroll-bar">
      <div class="content" ref="wrapper">
        <li><img src='../../static/image/python.jpg'></li>
        <li><img src='../../static/image/ruff.jpg'></li>
        <li><img src='../../static/image/ios.jpg'></li>
        <li><img src='../../static/image/go.jpg'></li>
        <li><img src='../../static/image/maya.jpg'></li>
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
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    this.init()
    this._initSlide()
  },
  methods: {
    init () {
      let pages = (this.loop && 2) + 5
      this.$refs.wrapper.style.width = pages * 100 + '%'
    },
    next () {
      this.slide.next()
    },
    prev () {
      this.slide.prev()
    },
    play () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.next()
      }, this.interval)
    },
    _initSlide () {
      this.slide = new BScroll('.scroll-bar', {
        scrollX: true,
        scrollY: false,
        // momentum该属性会根据用户滑动一段距离与时间计算出动量，从而切换的翻页速度回不同，所以使其返回false
        momentum: false,
        snap: {
          loop: this.loop
        },
        bounce: false,
        stopPropagation: true
      })
      // 轮播图是否开启自动播放功能
      this.autoplay && this.play()
      this.autoplay && this.slide.on('scrollStart', () => {
        clearInterval(this.timer)
      })
      this.autoplay && this.slide.on('scrollEnd', () => {
        this.play()
      })
    }
  }
}
</script>

<style>
  .scroll-bar {
    width: 100%;
    height: 125px;
  }
  .content {
    display: flex;
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
  .content li>img {
    width: 100%;
    height: 100%;
  }
</style>
