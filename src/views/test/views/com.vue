<template>
    <div>
        <p :is="comToRender"></p>
        <!-- <com-a></com-a> -->
        <button @click="comToRender = 'com-a'">show comA</button>
    </div>
</template>

<script>
import ComA from '@/components/test/components/ComA.vue';
import ComB from '@/components/test/components/ComB.vue';

export default {
    data(){
        return{
            comToRender:'com-b',
        }
    },
    components:{
        ComA,
        ComB
    }
}
</script>

<style lang="less" scoped>

</style>
