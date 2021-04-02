<template>
    <div class="box" ref="box">
        <el-row>
            <el-button class="btn" @click="changeTheme('default-theme')">
                默认主题
            </el-button>

            <el-button class="btn" @click="changeTheme('dark-theme')">
                深色主题
            </el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            changeTheme: function(name) {
                const classList = this.$refs.box.classList;
                let activeThemes = [];
                classList.forEach((item)=> {
                    if (item.endsWith('theme')) {
                        activeThemes.push(item)
                    }
                });

                for (const activeTheme of activeThemes) {
                    classList.remove(activeTheme);
                }

                this.$refs.box.classList.add(name);
            }
        }
    }
</script>

<style scoped lang="scss">
    /**
     * 默认主题样式变量
     */
    :root {
        --theme-color: #70C000;
        --theme-color-hover: #61A600;
        --theme-color-active: #528C00;
        --selection-color: rgba(112, 192, 0, .35);

        --theme-color-lime: #70C000;
        --theme-color-hover-lime: #61A600;
        --theme-color-active-lime: #528C00;
        --selection-color-lime: rgba(112, 192, 0, .35);

        --theme-color-indigo: #4CB6C2;
        --theme-color-hover-indigo: #429EA8;
        --theme-color-active-indigo: #337A82;
        --selection-color-indigo: rgba(76, 182, 194, .35);

        --theme-color-violet: #BB8CDD;
        --theme-color-hover-violet: #A67CC4;
        --theme-color-active-violet: #86649E;
        --selection-color-violet: rgba(187, 140, 221, .35);

        --theme-color-rose: #FF4B68;
        --theme-color-hover-rose: #E6435E;
        --theme-color-active-rose: #BF374E;
        --selection-color-rose: rgba(255, 75, 104, .35);

        --theme-color-blue: #5CA1FF;
        --theme-color-hover-blue: #5390E6;
        --theme-color-active-blue: #4578BF;
        --selection-color-blue: rgba(92, 161, 255, .35);
    }

    .default-theme {
        --w-alpha-5: rgba(255, 255, 255, .05);
        --w-alpha-10: rgba(255, 255, 255, .1);
        --w-alpha-15: rgba(255, 255, 255, .15);
        --w-alpha-20: rgba(255, 255, 255, .2);
        --w-alpha-30: rgba(255, 255, 255, .3);
        --w-alpha-50: rgba(255, 255, 255, .5);
        --w-alpha-60: rgba(255, 255, 255, .6);
        --w-alpha-70: rgba(255, 255, 255, .7);
        --w-alpha-80: rgba(255, 255, 255, .8);
        --w-alpha-90: rgba(255, 255, 255, .9);
        --bg-w-235: rgb(235, 235, 235);
        --bg-w-pure: white;
        --bg-w-hover: rgb(205, 205, 205);
        --bg-w-active: rgb(175, 175, 175);
        --txt-w-pure: white;
        --txt-b-pure: black;
        --txt-b-tip: rgba(0, 0, 0, .8);
        --b-alpha-5: rgba(0, 0, 0, .05);
        --b-alpha-10: rgba(0, 0, 0, .1);
        --b-alpha-15: rgba(0, 0, 0, .15);
        --b-alpha-20: rgba(0, 0, 0, .2);
        --b-alpha-30: rgba(0, 0, 0, .3);
        --b-alpha-35: rgba(0, 0, 0, .35);
        --b-alpha-40: rgba(0, 0, 0, .4);
        --b-alpha-50: rgba(0, 0, 0, .5);
        --b-alpha-60: rgba(0, 0, 0, .6);
        --b-alpha-70: rgba(0, 0, 0, .7);
        --b-alpha-80: rgba(0, 0, 0, .8);
        --b-alpha-90: rgba(0, 0, 0, .9);
    }

    /**
     * 深色主题变量
     */
    .dark-theme {
        --w-alpha-5: rgba(0, 0, 0, .05);
        --w-alpha-10: rgba(0, 0, 0, .1);
        --w-alpha-15: rgba(0, 0, 0, .15);
        --w-alpha-20: rgba(0, 0, 0, .2);
        --w-alpha-30: rgba(0, 0, 0, .3);
        --w-alpha-50: rgba(30, 30, 30, .5);
        --w-alpha-60: rgba(0, 0, 0, .6);
        --w-alpha-70: rgba(30, 30, 30, .7);
        --w-alpha-80: rgba(30, 30, 30, .8);
        --w-alpha-90: rgba(30, 30, 30, .9);
        --bg-w-235: rgb(30, 30, 30);
        --bg-w-pure: rgb(30, 30, 30);
        --bg-w-hover: rgb(40, 40, 40);
        --bg-w-active: rgb(50, 50, 50);
        --txt-w-pure: black;
        --txt-b-pure: white;
        --txt-b-tip: rgba(255, 255, 255, .5);
        --b-alpha-5: rgba(255, 255, 255, .05);
        --b-alpha-10: rgba(255, 255, 255, .1);
        --b-alpha-15: rgba(255, 255, 255, .15);
        --b-alpha-20: rgba(255, 255, 255, .2);
        --b-alpha-30: rgba(255, 255, 255, .3);
        --b-alpha-35: rgba(255, 255, 255, .35);
        --b-alpha-40: rgba(255, 255, 255, .4);
        --b-alpha-50: rgba(255, 255, 255, .5);
        --b-alpha-60: rgba(255, 255, 255, .6);
        --b-alpha-70: rgba(255, 255, 255, .7);
        --b-alpha-80: rgba(255, 255, 255, .8);
        --b-alpha-90: rgba(255, 255, 255, .9);
    }


    .box {
        width: 100%;
        height: 100vh;
        background-color: var(--w-alpha-60);
    }

    .btn {
        background-color: var(--w-alpha-30);
    }
</style>
