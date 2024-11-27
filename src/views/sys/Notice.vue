<template>
    <div class="main-body">
        <!-- 工具栏 -->
         <div class="toolbar">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.title" :placeholder="t('thead.title')"></el-input>
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

      <!-- 新增/编辑对话框 -->
  <el-dialog
    :title="isEdit ? t('action.edit') : t('action.add')"
    width="40%"
    draggable
    v-model="dialogVisible"
    :close-on-click-modal="false"
    @close="doClose"
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="80px" label-position="right">
      <el-form-item :label="t('thead.title')" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item :label="t('thead.content')" prop="content">
        <el-input type="textarea" v-model="form.content" :words-limit="300"></el-input>
      </el-form-item>
      <el-form-item :label="t('form.publish')">
        <el-switch v-model="form.isPublish"></el-switch>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="doClose">{{ t("action.cancel") }}</el-button>
      <el-button
        type="primary"
        :loading="formLoading"
        @click="handleSubmit"
      >{{ t("action.submit") }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
    import { listPage, save, update, remove } from '@/apis/sys-notice'
    import useTableHandlers from '../use-table-handlers'

    // const dialogVisible = ref(false);
    // const isEdit = ref(false);
    // const formLoading = ref(false);
    // const formRef = ref();
    const form = reactive({
        id: '',
        title: '',
        content: '',
        isPublish: false
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
    
    const filters = reactive({
        title: ''
    })
    const columns = computed( () => [
        {type:'selection'},
        { prop: 'id', label: t('thead.ID'), minWidth: 60 },
        { prop: 'title', label: t('thead.title'), minWidth: 120,showOverflowTooltip: true },
        { prop: 'content', label: t('thead.content'), minWidth: 120 ,showOverflowTooltip: true },
        { prop: 'publishTime', label: t('thead.publishTime'), minWidth: 120 },
        { prop: 'createdTime', label: t('thead.createdTime'), minWidth: 120 },
        { prop: 'createdBy', label: t('thead.createdBy'), minWidth: 120 },
    ])

    const operations = [
        {
            type: 'edit',
            disabled: (row)=>{
                return !!row.publishTime
            }
        },
        {

            type: 'delete',
        }
    ]

    const rules = computed(() => {
        return {
            title: [
            { required: true, message: t('form.titleRequired'), trigger: ['blur', 'change'] },
            { min: 2, max: 60, message: t('form.titleError'), trigger: ['blur', 'change'] }
            ],
            content: [
            { required: true, message: t('form.contentRequired'), trigger: ['blur', 'change'] },
            { min: 2, max: 300, message: t('form.contentError'), trigger: ['blur', 'change'] }
            ]
        }
    })

    //获取分页数据
    // const findPage = () => {
    //     tableRef.value.reload()
    // }

    // function handleEdit(row){
    //     isEdit.value = true
    //     dialogVisible.value = true
    //     for(const k in form){
    //         if(k in form){
    //             form[k] = row[k]
    //         }
    //     }
    // }

    function handleDelete(ids,callback){
        doRemove(remove,ids,callback)
    }


    // 弹窗数据和方法


    // 处理新增事件
    // function handleAdd() {
    //     isEdit.value = false
    //     dialogVisible.value = true
    // }

    // 重置form
    // 如果确保 form 总是存在的，并且 __formOld__ 和 form 的结构完全一致 ,推荐这种
    // function resetForm() {
    //     Object.assign(form, __formOld__)
    // }

    // 如果需要更严格的错误处理，或者 __formOld__ 和 form 的结构可能不一致 推荐这种
    // const resetForm = () => {
    //     if (!form) return;
    //     for (const k in __formOld__) {
    //     form[k] = __formOld__[k];
    //     }
    // };

    // 关闭
    // function doClose() {
    //     dialogVisible.value = false;
    //     resetForm();
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
    //         .then(()=>{
    //             ElMessage({message: t('tips.success'), type: 'success',showClose: true});
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

    // function getParams(){
    //     const params = { ... form }
    //     if(!isEdit.value){
    //         delete params.id
    //     }
    //     return params;
    // }

    function handleSubmit(){
        doSubmit({ save, update})
    }


</script>