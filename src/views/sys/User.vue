<template>
    <div class="main-body">
        <!-- 工具栏 -->
         <div class="toolbar">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" :placeholder="t('thead.username')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button icon="search" type="primary" @click="doSearch">{{t('action.search')}}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button icon="plus" type="primary" @click="doAdd">{{t('action.add')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 表格内容栏 -->
         <cm-table
            ref="tableRef"
            :get-page="listPage"
            :filters="filters"
            :columns="columns"
            :operations="operations"
            :showPagination="true"
            @handleEdit="doEdit"
            @handleDelete="handleDelete"
        ></cm-table>
    </div>

    
  <!--新增编辑界面-->
  <el-dialog
    :title="isEdit ? t('action.edit') : t('action.add')"
    v-model="dialogVisible"
    draggable
    width="40%"
    :close-on-click-modal="false"
    @close="doClose"
  >
    <el-form ref="formRef" :model="form" label-width="80px" :rules="rules" label-position="right">
      <el-form-item :label="t('form.username')" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="t('form.group')" prop="roleId">
        <el-select v-model="form.roleId" :placeholder="t('form.choose')" style="width: 100%">
          <el-option v-for="item in roles" :key="item.name" :label="item.label" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="doClose">{{ t("action.cancel") }}</el-button>
      <el-button v-if="isEdit" type="primary" @click="handleSetPsw">{{ t("form.resetPassword") }}</el-button>
      <el-button
        type="primary"
        @click="handleSubmit"
        :loading="formLoading"
      >{{ t("action.submit") }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
    import { listPage, save, update, remove, setPsw } from '@/apis/sys-user'
    import { roles } from '@/mock/data'
    import useTableHandlers from '../use-table-handlers'

    const form = reactive({
        id: '',
        name: '',
        roleId: '',
    })

    const filters = reactive({
        name: ''
    })

    const {
        t,
        tableRef,
        dialogVisible,
        isEdit,
        formLoading,
        formRef,
        doAdd,
        doEdit,
        doSubmit,
        doRemove,
        doSearch,
        doClose,

    } = useTableHandlers(form);

    const columns = computed( () => [
        {type:'selection',selectable: isSelectable},
        { prop: 'id', label: t('thead.ID'), minWidth: 60 },
        { prop: 'name', label: t('thead.username'), minWidth: 120 },
        { prop: 'roleName', label: t('thead.group'), minWidth: 120 , },
        { prop: 'createdBy', label: t('thead.createdBy'), minWidth: 120 },
        { prop: 'ip', label: t('thead.latestIp'), minWidth: 120 },
        { prop: 'visitTime', label: t('thead.latestVisit'), minWidth: 120 },
    ])

    const operations = [
        {
            type: 'edit',
            show: (row)=>{
                return row.createdBy !== 'system'
            }
        },
        {
            type: 'delete',
            show: row =>  row.createdBy !== 'system'
        }
    ]

    const rules = computed(() => {
        return {
            name: [
            { required: true, message: t('form.usernameHolder'), trigger: ['blur', 'change'] },
            ],
            roleId: [
            { required: true, message: t('form.roleRequired'), trigger: ['blur', 'change'] },
            ]
        }
    })

    function isSelectable(row){
        return row.createdBy !== 'system'
    }

    //获取分页数据
    // 改成从公共文件中引入
    // const findPage = () => {
    //     tableRef.value.reload()
    // }

    // function handleEdit(row){
    //     console.log('handleEdit',row)
    // }

    function handleDelete(ids,callback){
        doRemove( remove , ids, callback)
    }


    // 弹窗变量和方法
    // const dialogVisible = ref(false)
    // const isEdit = ref(false);
    // const formLoading = ref(false);
    // const formRef = ref();

    // const __formOld__ = { ...form }

        // 处理新增事件
    // function handleAdd() {
    //     isEdit.value = false
    //     dialogVisible.value = true
    // }

    // 重置form
    // 如果确保 form 总是存在的，并且 __formOld__ 和 form 的结构完全一致 ,推荐这种
    function resetForm() {
        Object.assign(form, __formOld__)
    }

    // 关闭
    // function doClose() {
    //     dialogVisible.value = false;
    //     resetForm();
    // }

    // function getParams(){
    //     const params = { ... form }
    //     if(!isEdit.value){
    //         delete params.id
    //     }
    //     return params;
    // }

    // form提交
    // function handleSubmit(){
    //     formRef.value.validate(valid => {
    //         if(!valid) return;
    //         formLoading.value = true;
    //         let promise;
    //         const params = getParams();
    //         if(isEdit.value){
    //             promise = update(params);
    //         }else{
    //             promise = save(params);
    //         }
    //         promise
    //         .then((res)=>{
    //             if(!isEdit.value){
    //                 ElMessageBox.alert(
    //                     `${t('tips.success')}${t('form.username')}: ${res.data.name},${t('form.password')}: ${res.data.password}`,
    //                     t('tips.title'),
    //                     {
    //                     confirmButtonText: t('action.confirm'),
    //                     }
    //                 )
    //             }else{
    //                 ElMessage({message: t('tips.success'), type: 'success',showClose: true});
    //             }
    //             doClose();
    //             if(isEdit.value){
    //                 tableRef.value.refresh();
    //             }else{
    //                 tableRef.value.reload();
    //             }
    //         })
    //         .finally(() => {
    //             formLoading.value = false;
    //         })

    //     });
    // }

    function handleSubmit() {
        doSubmit({ save, update },(res)=>{
            if (!isEdit.value) {
                ElMessageBox.alert(
                    `${t('tips.success')}${t('form.username')}: ${res.data.name},${t('form.password')}: ${res.data.password}`,
                    t('tips.title'),
                    {
                    confirmButtonText: t('action.confirm'),
                    }
                )
            }
        });

    }


    function handleSetPsw() {
        setPsw({ ...form }).then(res => {
            ElMessageBox.alert(
            `${t('tips.success')}${t('form.username')}: ${res.data.name},${t('form.password')}: ${res.data.password}`,
            t('tips.title'),
            {
                confirmButtonText: t('action.confirm'),
            }
            )
        })
    }
</script>