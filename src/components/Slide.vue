<template>
    <div class="scroll-bar">
      <div class="content" ref="wrapper">
        <li v-for="(item, index) in slideData" :key="index">
          <img :src="item.imgUrl"/>
        </li>
      </div>
      <div class="points">
        <i class="circle" :class="{active: currentPage == index }" v-for="(item, index) in slideData" :key="index"></i>
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
      default: 1
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    slideData: {
      type: Array,
      default: () => {
        return [
          {imgUrl: '../../static/image/python.jpg'},
          {imgUrl: '../../static/image/ruff.jpg'},
          {imgUrl: '../../static/image/ios.jpg'},
          {imgUrl: '../../static/image/go.jpg'},
          {imgUrl: '../../static/image/maya.jpg'}
        ]
      }
    }
  },
  data () {
    return {
      currentPage: this.initialIndex - 1
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
    pointMove (direction) {
      let index = this.slide.currentPage.pageX
      if (this.currentPage < index) {
        this.currentPage = index === 5 ? 0 : index 
      } else {
        this.currentPage = index === 0 ? 4 : index - 1
      }
    },
    next () {
      this.pointMove()
    },
    prev () {
      this.slide.prev()
    },
    play () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.prev()
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

      this.slide.on('beforeScrollStart', ()=>{
        this.pointMove()
      })
    }
  }
}
</script>

<style>
  .scroll-bar {
    position: relative;
    width: 100%;
    height: 10rem;
  }
  .content {
    display: flex;
    height: 100%;
  }
  .content li{
    box-sizing: border-box;
    padding: 10px 20px;
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
    border-radius: 10px;
    box-shadow: 0 0px 8px black
  }
  .points {
    position:absolute;
    bottom: -5px;
    left: 50%;
    transform:translateX(-50%);
  }

  .points .circle {
    display:inline-block;
    width: 4px;
    height: 4px;
    margin:0 4px;
    border-radius: 2px;
    background:rgba(101, 200, 122, 0.8);
  }

  .points .active {
    width: 12px;
  }
</style>
