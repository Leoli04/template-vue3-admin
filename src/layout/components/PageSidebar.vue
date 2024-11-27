<template>
    <div class="page-sidebar">
        <div class="collape-bar">
            <el-icon class="cursor" @click="isCollapse=!isCollapse">
                <expand v-if="isCollapse"/>
                <fold v-else/>
            </el-icon>
        </div>
        <!-- el-menu菜单组件设置router=true，启用vue-router模式，当激活导航时，以index作为path进行路由跳转 -->
        <el-menu :default-active="defaultActive" router class="sidemenu" :collapse="isCollapse">
            <el-sub-menu v-for="(item, index) in treeData" :key="index" :index="item.path">
                <template #title>
                    <el-icon v-if="item.icon">
                        <component :is="item.icon" />
                    </el-icon>
                    <span> {{ t( `menu.${item.name}` ) }}</span>
                </template>
                <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
                    <el-menu-item :index="subItem.path">
                        <el-icon>
                            <component :is="subItem.icon" />
                        </el-icon>
                        {{ t(`menu.${subItem.name}`) }}
                    </el-menu-item>
                </template>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
// import { menuTreeData } from '@/mock/data'
import { computed } from 'vue';

const store = useStore()
const route = useRoute()
const { t } = useI18n()

// const treeData = menuTreeData
const treeData = computed(() => store.state.menuTree)
const defaultActive = computed(() => route.path ||  treeData.vallue[0].path)
const isCollapse = ref(false)


</script>

<style lang="scss" scoped>
$side-width: 200px;
.page-sidebar {
    .sidemenu.el-menu,
    .sidemenu .el-sub-menu > .el-menu {
        --el-menu-text-color: #ccc;
        --el-menu-hover-bg-color: #060252;
        --el-menu-border-color: transparent;
        --el-menu-bg-color: #000;
        .el-menu-item {
            &.is-active {
                background-color: var(--el-menu-hover-bg-color)
            }
        }
    }

    .sidemenu.el-menu:not(.el-menu--collapse) {
        width: $side-width;
    }

    .collape-bar {
        color: #fff;
        font-size: 16px;
        line-height: 36px;
        text-align: center;

        .c-icon {
            cursor: pointer;
        }
    }

}
</style>