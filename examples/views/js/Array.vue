<template>
    <div id="app">
        <el-row class="">
            <el-col :span="4" class="button-col">
                <el-button type="primary" @click="test">teste</el-button>
            </el-col>
            <el-col :span="4" class="button-col">
                <el-button type="primary">teste</el-button>
            </el-col>
            <el-col :span="4" class="button-col">
                <el-button type="primary">teste</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Array",
        methods: {
            test() {
                //let arr = [3,5,7,1,8, 3,2,7, 2];
                let str = 'aC_sjDw';
                let ab = str.toLowerCase().replace(/_(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
                alert(ab);
            }
        }
    }
</script>

<style scoped>
    .button-row {

    }

    .button-col {
        text-align: center;
    }
</style>
