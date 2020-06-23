<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-button type="primary" @click="render">字符串模版</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {string} from '@/util/index.js';

    export default {
        name: "String",
        data() {
            return {}
        },
        methods: {
            render() {
                let template = '你好,我叫{name}, 我今年{user.age}岁了';
                this.$notify({
                    title: '字符串模版渲染',
                    dangerouslyUseHTMLString: true,
                    message: '<p><b>模版</b>: ' + template + '</p>' +
                        '<p><b>渲染后</b>: ' + string.render(template, {
                            name: '张三',
                            user: {
                                age: 10
                            }
                        }) + '</p>'
                });
            }
        }
    }
</script>

<style scoped>

</style>
