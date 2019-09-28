<template>
  <el-form :model="loginData" ref="loginData" :rules="loginValid" label-width="150px">
    <div>
      <h3>登录</h3>
      <el-form-item label="账号：" prop="account">
        <el-input v-model.trim="loginData.account"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model.trim="loginData.password"></el-input>
      </el-form-item>
      <el-button @click="submit">提交</el-button>
    </div>
  </el-form>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      loginData: {
        account: 'tanshixin',
        password: ''
      },
      loginValid: {}
    }
  },
  methods: {
    submit() {
      this.$router.push('/photosWall')
    }
  },
  components: {}
}
</script>
