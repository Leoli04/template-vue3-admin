<template>
    about页面
    <hr/>
    <button @click="increase">增加</button>
    <hr/>
    count:{{ count }}
</template>

<script setup>
// import { useStore } from 'vuex'
// import { ref } from 'vue'

const store = useStore()

const count = ref(3)

function increase() {
    count.value++
    store.commit('increase',count.value)
    
    // console.log(window.store.state.count);
}
</script>