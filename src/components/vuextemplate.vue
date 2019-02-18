<template>
<div>
    <h1>vuex测试</h1>
    <hr>
    <counter></counter>
    <hr>
    <amount></amount>
</div>
</template>
<script>
import counter from './subcomponents/counter'
import amount from './subcomponents/amount'
export default {
    components:{
        counter,
        amount
    }
}
</script>
<style>
</style>
