<template>
    <div id="app">
        <el-row class="">
            <el-col :span="4" class="button-col">
                <el-button type="primary" @click="group">分组</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {array} from '@/util/index.js';
    export default {
        name: "Array",
        methods: {
            group() {
                const a = [{
                    id: 1,
                    name: '张三',
                    age: 10,
                    sex: '男'
                },{
                    id: 2,
                    name: '李四',
                    age: 10,
                    sex: '男'
                },{
                    id: 3,
                    name: '王五',
                    age: 10,
                    sex: '女'
                },{
                    id: 4,
                    name: '赵柳',
                    age: 10,
                    sex: '男'
                },{
                    id: 5,
                    name: '钱七',
                    age: 22,
                    sex: '女'
                }];
                let result = array.group(a, 'sex');

                this.$notify({
                    title: '分组',
                    message: result
                });
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
