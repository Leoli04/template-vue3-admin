<template>
  <div class="main-body">
    <!-- 工具栏 -->
    <div class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input
            v-model="filters.title"
            :placeholder="t('thead.title')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="search" type="primary" @click="doSearch">{{
            t("action.search")
          }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="plus" type="primary" @click="handleAdd">{{
            t("action.add")
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格内容栏 -->
    <cm-table
      row-key="id"
      ref="tableRef"
      :get-page="listTree"
      :filters="filters"
      :columns="columns"
      :showBatchDelete="false"
      :showPagination="false"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
    ></cm-table>
  </div>

  <!-- 弹窗 -->
  <el-dialog
    :title="isEdit ? t('action.edit') : t('action.add')"
    width="40%"
    draggable
    v-model="dialogVisible"
    :close-on-click-modal="false"
    @close="doClose"
  >
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      @keyup.enter="handleSubmit"
      label-width="80px"
    >
      <el-form-item :label="t('thead.name')" prop="name">
        <el-input v-model="form.name" :placeholder="t('thead.name')"></el-input>
      </el-form-item>
      <el-form-item :label="t('form.parent')" prop="parentId">
        <!-- 通过props指定了选项文本标签为对应选项数据对象的属性名称name(label: 'name')，
         指定选项的值为对应选项数据对象的id值(value: 'id')，
         并设置父子节点不互相关联(checkStrictly: true) -->
        <el-cascader
          v-model="form.parentId"
          :props="{
            label: 'name',
            value: 'id',
            checkStrictly: true,
            emitPath: false,
          }"
          :options="deptData"
          clearable
          filterable
          class="w100p"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="doClose">{{ t("action.cancel") }}</el-button>
      <el-button type="primary" @click="handleSubmit">{{
        t("action.confirm")
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { listTree, save, update, remove,listOtherTreeById } from "@/apis/app-dept";
import useTableHandlers from "../use-table-handlers";

const form = reactive({
  id: "",
  name: "",
  parentId: null,
});
const filters = reactive({
  name: "",
});

const {
  t,
  tableRef,
  dialogVisible,
  isEdit,
  formLoading,
  formRef,
  doSearch,
  doAdd,
  doEdit,
  doRemove,
  doSubmit,
  doClose,
} = useTableHandlers(form);

const deptData = ref([]);

const columns = computed(() => [
  { prop: "id", label: t("thead.ID") },
  { prop: "name", label: t("thead.name") },
  { prop: "createdBy", label: t("thead.createdBy") },
  { prop: "createdTime", label: t("thead.createdTime"), minWidth: 160 },
  { prop: "lastUpdatedBy", label: t("thead.updatedBy") },
  { prop: "lastUpdatedTime", label: t("thead.updatedTime"), minWidth: 160 },
]);

const operations = [
  {
    type: "edit",
    disabled: (row) => {
      return !!row.publishTime;
    },
  },
  {
    type: "delete",
  },
];

const rules = computed(() => {
  return {
    name: [
      {
        required: true,
        message: t("form.usernameHolder"),
        trigger: ["change", "blur"],
      },
    ],
  };
});

//获取分页数据
// const findPage = () => {
//   tableRef.value.reload();
// };

function initFormRequest(row) {
  listOtherTreeById(row ? { id: row.id } : null).then((res) => {
    deptData.value = res.data;
  });
}

function handleAdd(row) {
    initFormRequest();
    doAdd();
}
function handleEdit(row) {
    initFormRequest();
    doEdit();
}

function handleDelete(ids, callback) {
    doRemove(remove, ids, callback);
}

function handleSubmit() {
  doSubmit({ save, update });
}
</script>