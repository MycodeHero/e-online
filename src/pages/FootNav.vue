<template>
  <div class="footer-nav">
    <div v-for="(nav, index) in navs" :key="index">
      <img :src="nav.imgSrc" width=25>
      <p>{{nav.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FNav',
  data: function () {
    return {
      navs: [
        {
          imgSrc: '../../static/image/resourse.png',
          title: '资源'
        },
        {
          imgSrc: '../../static/image/refer.png',
          title: '推荐'
        },
        {
          imgSrc: '../../static/image/talk.png',
          title: '论坛'
        },
        {
          imgSrc: '../../static/image/admin.png',
          title: '个人'
        }
      ]
    }
  }
}
</script>

<style>
  .footer-nav {
    position:absolute;
    bottom:0px;
    left:0px;
    width: 100%;
    height:50px;
    box-shadow: 0 -1px 10px rgba(0,0,0, 0.1);
  }

  .footer-nav>div {
    width:25%;
    height:100%;
    float:left;
  }
  .footer-nav img {
    margin-top:2px;
  }
  .footer-nav p {
    font-size:10px;
    color:#666;
  }
</style>
