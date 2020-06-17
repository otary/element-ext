<template>
    <div>
        <el-button type="primary" size="mini" @click="getMousePos">获取鼠标位置</el-button>
    </div>
</template>

<script>
    import {dom} from '@/util/index.js';
    export default {
        name: "Dom",
        methods: {
            getMousePos(){
                let position = dom.getMousePos();
                this.$notify({
                    title: '鼠标位置',
                    message: position
                });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>