<template>
  <div class="enter">
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
  </div>
</template>

<script>
import {Form, FormItem, Input, Button} from 'element-ui'
export default {
  name: 'Login',
  components: {
    Form,
    FormItem,
    Input,
    Button
  }
}
</script>

<style>
  .enter {
    position:relative;
    width: 100%;
    height: 50%;
  }
  .el-form {
    min-width:375px;
    position:absolute;
    left:50%;
    margin-top:-65px;
    transform:translateX(-50%);
  }
  .el-form-item__label {
    width: 60px;
  }
  .el-form-item__content {
    margin:0 40px 0 60px;
  }
  .el-button--primary {
    background:rgba(101, 200, 122);
    border-color: rgba(101, 200, 122);
  }
  .el-button--primary:hover {
    background:rgba(101, 200, 122, 0.5);
    border-color: rgba(101, 200, 122, 0.5);
  }
</style>
