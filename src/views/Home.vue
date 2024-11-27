<template>
    home页面
    <hr/>
    <div class="wrap">
        <p>count: {{ count }}</p>
    </div>
    
</template>

<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);

</script>

<style lang="scss">
.wrap {
    background: #f00;
    p {
        color: blue;
        font-size: 30px;
    }
}
</style>