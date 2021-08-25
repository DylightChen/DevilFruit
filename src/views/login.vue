<!--
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-17 09:47:33
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-25 20:32:34
-->
<template>
  <img class="login-background" src="../assets/image/loginBg.jpg" alt />
  <el-card
    class="login-card"
    v-loading="loading"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.2)"
  >
    <template #header>
      <div class="card-header">
        <span>登陆</span>
      </div>
    </template>
    <el-form :model="form" ref="refForm" class="form">
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
  
  <script lang="ts">
import { computed, defineComponent, reactive, toRefs, nextTick, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import instance  from "../api/index";
// let [basicApi,b] = [...basicApi1]
// ====== LOG START ======
console.log('\n');
console.group('Log');
console.log(instance);
console.groupEnd();
console.log('\n');
// ====== LOG END ======

export default defineComponent({
  setup() {
    const router = useRouter()
    console.log(instance.basicApi.authLogin);
    const data = reactive({
      loading: false,
      captchaPath: ''
    })
    let params = {
        account: '111',
        password: '111',
        captchaCode: '111',
        captchaCodeToken: '111'
      }
      function get() {
        instance.basicApi.authLogin(params).then((res: any) => {
          console.log(res);
        })
        
      }
      get()
    const refForm = ref()
    const form = reactive({
      username: 'test',
      password: 'test',
      uuid: '',
      code: ''
    })
    const rules = computed(() => {
      const rule = {
        username: [{ required: true, message: '', trigger: 'blur' }],
        password: [{ required: true, message: '', trigger: 'blur' }],
        code: [{ required: true, message: '', trigger: 'blur' }]
      }
      nextTick(() => {
        refForm.value.clearValidate()
      })
      return rule
    })
    /**
     * @description: 登录表单提交
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    const submit = (): void => {
      refForm.value.validate((valid: boolean) => {
        if (valid) {
          data.loading = true
          // loginApi(form).then(r => {
          if (valid) {
            // store.dispatch('user/setToken', r.data)
            router.push({ name: 'home' })
          } else {
            // captcha()
          }
          data.loading = false
          // })
        }
      })
    }

    //   onBeforeMount(() => {
    //     captcha()
    //   })

    return {
      ...toRefs(data),
      refForm,
      form,
      rules,
      submit
    }
  }
})
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
  