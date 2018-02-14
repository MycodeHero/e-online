<template>
  <div id="app">
    <MaskLayer>
      <Form>
        <Form-Item label='账户'>
          <Input type="text"/>
        </Form-Item>
        <Form-Item label='密码'>
          <Input type="password"/>
        </Form-Item>
        <Form-item>
          <Button type="primary">注册</Button>
          <Button type="primary">登录</Button>
        </Form-item>
      </Form>
    </MaskLayer>
    <div></div>
    <Login/>
  </div>
</template>

<script>
import Login from '@/pages/Login.vue'
import MaskLayer from '@/components/MaskLayer.vue'
import {Form, FormItem, Input, Button} from 'element-ui'
export default {
  name: 'App',
  components: {
    Login,
    MaskLayer,
    Form,
    FormItem,
    Input,
    Button
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
html, body {
  height: 100%;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.el-form {
  min-width:375px;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:135px;
  transform:translateY(-50%) translateX(-50%);
}
.el-form-item__label {
  width: 60px;
  color:white
}
.el-form-item__content {
  margin:0 40px 0 60px;
}
</style>
