<template>
  <div class="login">
    <Shade/>
    <Logo/>
    <div class="enter">
      <Form class="form">
        <!-- <transition name="slide-fade" > -->
          <TabContainer v-model="active" swipeable=true>
            <TabContainerItem id="login">
              <Field placeholder="账户" v-model="username"></Field>
              <Field placeholder="密码" type="password" v-model="passwd"></Field>
            </TabContainerItem>
            <TabContainerItem id="regist">
              <Field placeholder="账户" v-model="username"></Field>
              <Field placeholder="邮箱" type="password" v-model="email"></Field>
              <Field placeholder="新密码" type="password" v-model="passwd1"></Field>
              <Field placeholder="重新输入新密码" type="password" v-model="passwd2"></Field>
            </TabContainerItem>
          </TabContainer>
          <div class="form-item">
            <Button type="default" @click="login" v-if="active == 'login'">登录</Button>
            <Button type="default"  @click="regist" v-else>提交</Button>
            <span @click="switchSign" v-if="active == 'login'">创建一个新的账户</span>
            <span @click="switchSign" v-else>已有云智教育的账户? 去登录</span>
          </div>
        
      </Form>
    </div>
  </div>
</template>

<script>
import {Field, Button, TabContainer, TabContainerItem} from 'mint-ui'
import axios from 'axios'
import Logo from '@/pages/Logo.vue'
import Shade from '@/components/Shade.vue'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      passwd: '',
      passwd1: '',
      passwd2: '',
      email: '',
      active: "login",
    }
  },
  components: {
    Field,
    Button,
    Logo,
    Shade,
    TabContainer,
    TabContainerItem
  },
  methods: {
    regist () {
      // this.isLogin = false
      // axios.post('/regist', {
      //   'username': this.username,
      //   'password': this.passwd1,
      //   'email': this.email
      // }
      // ).then((data) => {
      //   console.log(data)
      // })
    },
    login () {
      // this.isLogin = false
    },
    switchSign () {
      if(this.active == 'login') {
        this.active = 'regist'
      }else {
        this.active = 'login'
      }
    }
  }
}
</script>

<style>
  .enter {
    width: 100%;
    height: 50%;
  }
  .form {
     box-sizing: border-box;
     padding: 0 40px;
     margin-top:-76px;
  }
  .mint-cell-value input {
    font-size: 16px;
    color: white;
    width: 100%;
  }
  .mint-cell-wrapper {
    background-image:none;
  }
  .mint-cell{
    display: inline-block;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    margin: 5px 0;
    min-height:42px;
    border: 1px solid white;
    border-radius: 4px;
  }
  .mint-cell-value input::-webkit-input-placeholder {
    color: white;
  }
  .separator {
    display:flex;
    color:white;
    justify-content: center;
    align-items: center;
  }
  .form-item {
    position: absolute;
    box-sizing: border-box;
    padding: 0 50px;
    left: 0px;
    bottom: 60px;
    width: 100%;  
    flex-wrap: wrap;
  }
  .mint-button {
    display: inline-block;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    color: white;
  }
  .form-item span{
    display: inline-block;
    color: white;
    margin-top: 5px;
  }
</style>
