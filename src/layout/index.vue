<template>
    <div class="page-container">
        <header>
            <page-header></page-header>
        </header>
        <main>
            <div v-if="showLeft" class="left">
                <page-sidebar></page-sidebar>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>"
        </main>
    </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';
import PageSidebar from './components/PageSidebar.vue';


const route = useRoute()

const showLeft = computed(() => {
  const routeName = route.name
  // 在登录页面、个人中心页面及其子页面、404页面中不显示这个侧边导航子组件，
  //其中个人中心页面及其子页面的路由统一使用Personal前缀，以区分个人中心关联的页面。
  return !['Login','NotFound'].includes(routeName)
        && !/^Personal/.test(routeName)
})
</script>

<style lang="scss" scpoed>
.page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;

    > header {
      height: 54px;
      background: #000;
      color: #fff;
    }

    > main {
        display: flex;
        flex: 1; /* 占满剩余空间 */
        overflow: auto;

        > .left {
            height: 100%;
            width: 250px; /* 根据需要调整宽度 */
            background-color: #000;
            color: #fff;
        }

        > .right {
            flex: 1;
            overflow: hidden;
            background-color: #f5f7f9;
            > .main-body {
                padding: 16px 16px 30px;
                overflow: auto;
                height: 100%;
                box-sizing: border-box;
            }
        }
    }

}

</style>