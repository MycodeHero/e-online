<template>
  <div class="footer-nav">
    <div class='footer-router'>
      <router-link v-for="(nav, index) in navs" :key="index" :to="nav.toUrl">
        <div class="nav-wrap">
          <img :src="nav.imgSrc" width=25/>
          <p>{{nav.title}}</p>
        </div>
      </router-link>
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
          toUrl: 'natural',
          imgSrc: '../../static/image/resourse.png',
          title: '资源'
        },
        {
          toUrl: 'refer',
          imgSrc: '../../static/image/refer.png',
          title: '推荐'
        },
        {
          toUrl: 'talk',
          imgSrc: '../../static/image/talk.png',
          title: '论坛'
        },
        {
          toUrl: 'admin',
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
    box-shadow: 0 -1px 10px rgba(0,0,0,0.1);
  }
  .footer-router {
    display:flex;
    width:100%;
    height:100%;
  }
  .footer-router > a {
    display:flex;
    flex-grow: 1;
    height: 100%;
    align-items:center;
    justify-content: center;
  }
  .footer-nav img {
    display: block;
  }
  .footer-nav p {
    font-size:8px;
    color:#666;
  }
</style>
