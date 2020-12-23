<template>
    <div class="main">
        <el-row style="position: fixed; top: 10px;">
            <el-button type="primary" size="mini" @click="getMousePos">获取鼠标位置</el-button>

            <el-button type="primary" size="mini" @click="toggleClass">切换Class</el-button>

            <el-button type="primary" size="mini" @click="getScrollPosition">获取页面元素滚动位置</el-button>

            <el-button type="primary" size="mini" @click="getViewportWH">获取窗口可视范围宽度/高度</el-button>

            <el-button type="primary" size="mini" @click="smoothScroll">滚动到最上/最下</el-button>

            <el-button type="primary" size="mini" @click="openWindow">打开新窗口</el-button>
            <el-row>
                <br/>
                <div ref="testBox1" style="width:100px; height: 100px;">

                </div>
            </el-row>
        </el-row>

    </div>
</template>

<script>
    import {dom} from '@/util/index.js';

    export default {
        name: "Dom",
        methods: {
            getMousePos() {
                const position = dom.getMousePos();
                this.$notify({
                    title: '鼠标位置',
                    message: position
                });
            },
            toggleClass() {
                dom.toggleClass(this.$refs.testBox1, 'test1');
            },
            getScrollPosition() {
                const position = dom.getScrollPosition();
                this.$notify({
                    title: '滚动位置',
                    message: position
                });
            },
            getViewportWH() {
                const {w, h} = dom.getViewport();
                this.$notify({
                    title: '可视窗口',
                    message: `宽度: ${w}, 高度: ${h}`
                });
            },
            smoothScroll() {
                const position = dom.getScrollPosition();
                if (position.y > 300) {
                    // 向上
                    dom.smoothScroll(false);
                } else {
                    // 向下
                    dom.smoothScroll(true);
                }
            },
            openWindow() {
                dom.openWindow("https://www.baidu.com", "我的窗口", 500, 700)
            }
        }
    }
</script>

<style scoped lang="scss">
    .test1 {
        background-color: red;
    }

    .main {
        height: 1500px;
    }
</style>
