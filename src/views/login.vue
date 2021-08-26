<!--
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-17 09:47:33
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 19:02:59
-->
<template>
  <img class="login-background" src="../assets/image/loginBg.jpg" alt />
  <el-card
    class="login-card"
    v-loading="data.loading"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.2)"
  >
    <template #header>
      <div class="card-header">
        <span>登陆</span>
      </div>
    </template>
    <el-form :model="form" ref="refForm" class="form" :rules="rules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submit()">登陆</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
  
  <script lang="ts" setup>
import { computed, reactive, toRefs, nextTick, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { instance } from "../api/index";

const router = useRouter()
const data = reactive({
  loading: false,
  captchaPath: ''
})
const refForm = ref()
const form = reactive({
  username: 'test',
  password: 'test',

})
const rules = reactive({
  username: [{ required: true, message: '输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '', trigger: 'blur' }]
})
/**
 * @description: 登录表单提交
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
const submit = (): void => {
  console.log(form)
  refForm.value.validate(async (valid: boolean) => {
    if (valid) {
      console.log(data)
      data.loading = true
      let res = await instance['basicApi'].authLogin(form)
      console.log(res);
      if (res.status) {
        console.log(res.date);
        // store.dispatch('user/setToken', r.data)
        router.push({ name: 'home' })
      } else {
        data.loading = false
        // captcha()
      }
    }
  })
}

</script>
<style lang="scss" scoped>
@import "Sass/_mixin.scss";
.login-background {
  width: 100vw;
  height: 100vh;
}
.login-card {
  position: absolute;
  @include position($t: 50%, $l: 80%);
  transform: translate(-50%, -50%);
  width: 500px;
  ::v-deep(.el-card) {
    background-color: transparent;
  }
  .form {
    .login-btn {
      width: 80%;
      cursor: pointer;
    }
    .login-btn {
      margin-top: 22px;
    }
  }
}
</style>
  