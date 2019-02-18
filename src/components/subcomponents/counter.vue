<template>
<div>
    counter.vue
    <br>
    <button @click="add">增加</button>
    <button @click="less">减少</button>
     
    <input type="text" name="" id="" v-model="$store.state.count">
</div>
</template>
<script>
export default {
    data(){
        return {
            // count:0
        }
    },
    methods:{
        add(){
            this.$store.commit('increment')
        },
        less(){
            this.$store.commit('less')
        }
    }
}
</script>
<style>
</style>
