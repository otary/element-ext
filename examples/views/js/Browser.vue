<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-button type="primary" @click="getFingerPrint">getFingerPrint</el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="isIE">isIE</el-button>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="isEdge">isEdge</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {browser} from '../../../src/util/index.js';
    export default {
        name: "Browser",
        data(){
            return {

            }
        },
        methods: {
            getFingerPrint(){
                this.$notify({
                    title: '浏览器指纹',
                    message: browser.getFingerPrint()
                });
            },
            isIE () {
                this.$notify({
                    title: '是否IE',
                    message: browser.isIE().toString()
                });
            },
            isEdge(){
                this.$notify({
                    title: '是否Edge',
                    message: browser.isEdge().toString()
                })
            }
        }
    }
</script>

<style scoped>

</style>
