<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="80px"
    label-position="left"
  >
    <el-form-item :label="t('form.username')">
      <label>{{ form.name }}</label>
    </el-form-item>
    <el-form-item
      :label="t('form.group')"
      :prop="!isSystemRole ? 'roleId' : ''"
    >
      <el-select
        v-model="form.roleId"
        :disabled="isSystemRole"
        :placeholder="t('form.choose')"
        style="margin-right: 10px"
      >
        <el-option
          v-for="item in roles"
          :key="item.name"
          :label="item.label"
          :value="item.name"
        ></el-option>
      </el-select>
      <el-button v-if="!isSystemRole" type="primary" @click="submit">{{
        t("action.apply")
      }}</el-button>
    </el-form-item>
  </el-form>
</template>


<script setup>
import { changeProfile } from "@/apis/personal";
import { roles} from '@/mock/data'

// 国家化
const { t } = useI18n();
//全局状态
const store = useStore();
const formRef = ref();
const form = reactive({
  name: "",
  roleIds: '',
});

// 计算属性：从全局状态中的user模块获取用户信息
const profile = computed(() => store.state.user.userInfo);
const isSystemRole = computed(()=> profile.value.createBy === 'system')
const rules = computed(() => {
  return {
    roleId: { required: true, message: t('form.roleRequired'), trigger: 'blur' }
  }
})

// 用户信息进行监听操作，当用户信息改变时进行form表单域赋值以更新表单域
watch(profile, () => {
  updateForm();
}, { immediate: true })

function updateForm() {
  form.name = profile.value.name;
  form.roleId = profile.value.roleId;
}

function submit() {
  formRef.value.validate(valid => {
    if (!valid) return;
    changeProfile({ ...form }).then(() => {
      ElMessage.success(t('tips.success'));
    })
  })
}

</script>