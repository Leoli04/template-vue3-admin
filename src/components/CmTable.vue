<template>
  <div v-loading="loading">
    <!-- 表格 -->
    <el-table
      class="cm-table_tb"
      :data="data.content"
      v-bind="$attrs"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        v-bind="column"
      ></el-table-column>
      <el-table-column
        v-if="showOperation"
        fixed="right"
        :label="t('action.operation')"
      >
        <template #default="{ row }">
          <template v-for="(opr, i) in operations" :key="i">
            <template v-if="isShow(opr.show, row)">
              <el-button
                v-if="opr.type === 'edit'"
                type="text"
                :disabled="isDisabled(opr.disable, row)"
                @click="handleEdit(row)"
                >{{ t("action.edit") }}</el-button
              >
              <el-button
                v-else-if="opr.type === 'delete'"
                type="text"
                class="danger"
                :disabled="isDisabled(opr.disable, row)"
                @click="handleDelete(row)"
                >{{ t("action.delete") }}</el-button
              >
              <el-button
                v-else
                type="text"
                :disabled="isDisabled(opr.disable, row)"
                @click="opr.onClick(row)"
                >{{ opr.label }}</el-button
              >
            </template>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页栏 -->
    <div class="cm-table_toolbar">
      <el-button
        type="danger"
        v-if="showBatchDelete"
        :disabled="selections.length === 0"
        @click="handleBatchDelete()"
        >{{ t("action.batchDelete") }}</el-button
      >
      <el-pagination
        class="cm-table_pagination"
        :total="data.totalSize || 0"
        v-if="showPagination"
        v-model:currentPage="pageRequest.pageNum"
        v-model:page-size="pageRequest.pageSize"
        :page-sizes="[10, 20, 50, 100, 200]"
        layout="total,prev,pager,next,sizes,jumper"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const { t } = useI18n();
const props = defineProps({
  getPage: Function, // 获取分页数据
  filters: Object,
  showPagination: {
    type: Boolean,
    default: true,
  },
  columns: Array, // 表头列
  showOperation: {
    // 是否显示操作列
    type: Boolean,
    default: true,
  },
  operations: {
    type: Array,
    default: () => {
      return [
        {
          type: "edit",
        },
        {
          type: "delete",
        },
      ];
    },
  },
  oprWidth: {
    type: Number,
    default: "185",
  },
  showBatchDelete: {
    // 是否显示批量删除
    type: Boolean,
    default: true,
  },
  sortby: Object, // 排序字段
});

const emit = defineEmits(["handleEdit", "handleDelete"]);

const loading = ref(false);

const pageRequest = reactive({
  pageNum: 1,
  pageSize: 10,
});

const data = ref({});

// 分页查询
function findPage() {
  if (!props.getPage) {
    return;
  }
  loading.value = true;
  const paramData = {
    // 解构pageRequest
    ...pageRequest,
    ...(props.filters || {}),
    sortby: props.sortby,
  };
  const req = props.getPage(paramData);
  if (Object(req).constructor === Promise) {
    req
      .then((res) => {
        if (res.data instanceof Array) {
          data.value = {
            content: res.data,
            totalSize: res.data.length,
          };
        } else {
          data.value = res.data;
        }
      })
      .catch(() => {
        data.value = {};
      })
      .finally(() => {
        loading.value = false;
      });
  }
}

function reload() {
  handlePageChange(1);
}

function handleSizeChange(pageSize) {
  pageRequest.pageSize = pageSize;
  pageRequest.pageNum = 1;
  findPage();
}

function handlePageChange(pageNum) {
  pageRequest.pageNum = pageNum;
  findPage();
}

reload();
// 在组件内部暴露特定属性或方法给父组件的宏
defineExpose({
  refresh: findPage,
  reload,
});

function isShow(showFn, row) {
  if (showFn && typeof showFn === "function") {
    return showFn(row);
  }
  return true;
}

function isDisabled(disabledFn, row) {
  if (disabledFn && typeof disabledFn === "function") {
    return disabledFn(row);
  }
  return false;
}

// 编辑
function handleEdit(row) {
  emit("handleEdit", row);
}
// 删除
function handleDelete(row) {
  emit("handleDelete", row);
}
const selections = ref([]);
function handleSelectionChange(slts) {
  selections.value = slts;
}

// 批量删除
function handleBatchDelete() {
  let ids = selections.value.map((v) => v.id).toString();
  onDelete(ids);
}

// 删除操作
function onDelete(ids) {
  ElMessageBox.confirm(t("tips.deleteConfirm"), t("tips.deleteTitle"), {
    confirmButtonText: t("tips.confirm"),
    cancelButtonText: t("tips.cancel"),
    type: "warning",
    draggable: true,
  })
    .then(() => {
      const callback = () => {
        ElMessage({
          type: "success",
          message: t("tips.success"),
        });
        reload();
      };
      emit("handleDelete", ids, callback);
    })
    .catch(() => {
      console.error("onDelete error!");
    });
}
</script>

<style lang="scss" scoped>
.cm-table_tb {
  border: 1px solid #eee;
  border-bottom: none;
  width: 100%;
}

.cm-table_toolbar {
  padding: 10px 5px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.cm-table_pagination {
  float: right;
  padding-right: 0;
}

.danger {
  color: var(--el-color-danger) !important;
}
</style>