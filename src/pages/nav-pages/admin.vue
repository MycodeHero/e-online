<template>
  <div class="admin">
    <Title content="个人中心"/>
    <div v-for="(item, index) in adminData" :key="index">
      <Item :content="item.nickname" :showIcon="false" height="80" :imgUrl="item['head_icon']"></Item>
      <div class="admin-details">
        <item content="签到"  type="sign"/>
        <Item content="消息中心" type="warn"/>
        <Item content="指定计划" type="plan"/>
        <Item content="最近学习" type="learn"/>
        <Item content="我喜欢的" type="favor"/>
        <Item content="收藏集" type="collect"/>
      </div>
      <div class="admin-details">
        <Item content="设置" type="set"></Item>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Title'
import Item from '../../components/Item'
export default {
  components: {
    Item,
    Title
  },
  computed: {
    adminData () {
      return this.$store.state.adminData
    }
  }
}
</script>

<style>
  .admin {
    box-sizing:border-box;
    padding-bottom: 50px;
    height:100%;
    background: rgb(239, 238, 245)
  }

  .admin-details {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }
</style>
