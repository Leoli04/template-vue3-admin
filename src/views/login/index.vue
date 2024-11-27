<template>
    <div class="page flex-center">
    <div class="sign-box">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="86px">
            <h3 class="title">{{ t('login') }}</h3>
            <el-form-item :label="t('form.username')" prop="account">
                <el-input v-model="form.account" :placeholder="t('form.usernameHolder')" prefix-icon="user"></el-input>
            </el-form-item>
            <el-form-item :label="t('form.password')" prop="password">
                <el-input v-model="form.password" type="password" :placeholder="t('form.passwordHolder')" prefix-icon="lock"></el-input>
            </el-form-item>

            <el-form-item label="">
                <div>
                    <el-button type="primary" calss="w100p" :loading="loading" @click="doLogin">{{ t('login') }}</el-button>
                </div>
                <!-- <div class="txt-r">
                    <router-link to="/elementPlus/register">没有账号？去注册</router-link>
                </div> -->
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script setup>
import { login } from "@/apis/login"
// import Mock from 'mockjs'

// Mock.mock('http://localhost:3000/login',{
//     code: 200,
//     data: {
//         token: '@guid'
//     }
// })

const router = useRouter()
const store = useStore()
const {t} = useI18n()

// 表单引用
const formRef = ref(null)
// 表单绑定数据
const form = reactive({
    account: '',
    password: '',
})


const rules = {
    account: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        {pattern: /^[a-zA-Z][a-zA-Z0-9_-]{3,31}$/, message: '账号由英文字母开头的长度6-32位字母、_、和-组成', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在 5 到 10'}
    ],
}

const loading = ref(false)

const doLogin = () => {
    formRef.value.validate((valid) => {
        if(!valid) return;
        loading.value = true
        login(form).then(res => {
            store.commit('user/setToken', res.data.token)
            store.dispatch('user/refreshUserInfo')
            store.commit('setRouteLoaded',false)
            // localStorage.setItem('pm_token', res.data.token)
            router.push('/')
        }).finally(() => {
            loading.value = false
        })
  });
}


</script>

<style lang="scss" scoped>
 .page {
    height: 100%;
    background: url(@/assets/bg.png) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
 }

 .sign-box {
    width: 400px;
    background: #fff;
    padding: 30px 50px 20px 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px #022c44;
    z-index: 1;  //确保表单在背景图片上方
 }

 .title {
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0;
    margin-bottom: 10px;
    color: #000;
 }
</style>