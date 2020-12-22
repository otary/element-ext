<template>
    <div>
        <el-row>
            <el-button type="primary" size="mini" @click="getMousePos">获取鼠标位置</el-button>

            <el-button type="primary" size="mini" @click="toggleClass">切换Class</el-button>

            <el-button type="primary" size="mini" @click="getScrollPosition">获取页面滚动位置</el-button>

        </el-row>
        <el-row>
            <div ref="testBox1" style="width:100px; height: 100px;">

            </div>
        </el-row>
    </div>
</template>

<script>
    import {dom} from '@/util/index.js';

    export default {
        name: "Dom",
        methods: {
            getMousePos() {
                let position = dom.getMousePos();
                this.$notify({
                    title: '鼠标位置',
                    message: position
                });
            },
            toggleClass() {
                dom.toggleClass(this.$refs.testBox1, 'test1');
            },
            getScrollPosition() {
                let position = dom.getScrollPosition();
                this.$notify({
                    title: '滚动位置',
                    message: position
                });
            },

        }
    }
</script>

<style scoped lang="scss">
    .test1 {
        background-color: red;
    }
</style>
