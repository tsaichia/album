<template lang="pug">
  #reg
    b-row
      b-col(cols="12")
        br
        h1.text-center 註冊
        b-form.d-flex.flex-column(@submit="submit")
          b-form-group(
            label="帳號"
            label-for="input-account"
            description="帳號長度為 4 - 20 個字"
            invalid-feedback="帳號格式不符"
            :state="state('account')"
            )
            b-form-input#input-account(type="text" v-model="account" :state="state('account')")
          b-form-group(
            label="密碼"
            label-for="input-password"
            description="密碼長度為 4 - 20 個字"
            invalid-feedback="密碼格式不符"
            :state="state('password')"
            )
            b-form-input#input-account(type="password" v-model="password" :state="state('password')")
          b-button.m-auto(type="submit" variant="primary") 註冊
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    state (type) {
      if (type === 'account') {
        if (this.account.length < 4 || this.account.length > 20) {
          return false
        } else {
          return true
        }
      } else if (type === 'password') {
        if (this.password.length < 4 || this.password.length > 20) {
          return false
        } else {
          return true
        }
      }
    },
    submit (event) {
      event.preventDefault()
      this.axios.post(process.env.VUE_APP_APIURL + '/users', { account: this.account, password: this.password })
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('註冊成功')
          } else {
            // 不是 就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  }
}
</script>
