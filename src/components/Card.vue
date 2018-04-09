<template>
  <div class="card">
    <div class="card-title">
      <span>高数</span>
      <a href="#">查看全部</a>
    </div>
    <div class="card-item" v-for="i in [1,2,3]" :key="i">
      <img src="../../static/image/toutiao.jpeg"/>
      <div class="card-wrap">
        <div class="card-msg">
          <p class="title">今日头条</p>
          <span class="msg">你关心的，才是头条</span>
        </div>
        <div class="card-select">
          <span>查看</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .card {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding:10px 20px 0px 20px;;
  }
  .card::after, .card-wrap::after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgb(212, 212, 212);
    transform:scaleY(0.5)
  }
  .card-title {
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 5px;
  }
  .card-title span {
    margin-left: 10px;
    font-size: 17px;
    font-weight: 700;
  }
  .card-title a {
    margin-right: 10px;
    color:rgb(64, 131, 235);
    font-size:12px;
  }
  .card-item {
    display:flex;
    width: 100%;
    height: 60px;
    align-items: center;
  }

  .card-item img {
    height: 100%;
  }

  .card-item:last-child .card-wrap::after {
    display: none;
  }

  .card-wrap {
    position: relative;
    width: 100%;;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-wrap::after {
    position: absolute;
    bottom: 0px;
  }
  .card-msg {
    flex-grow:1;
    text-align:left;
    padding-left:8px;
  }

  .card-msg .title {
    width: 100%;
    font-size:14px;
    font-weight: 700;
    text-align:left;
  }

  .card-msg .msg {
    width: 100%;
    font-size: 12px;
  }

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
