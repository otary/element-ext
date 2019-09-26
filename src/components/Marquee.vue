<template>
    <div class="m-marquee" ref="marquee" :style="`width: ${width}; height: ${height};`">
        <div class="m-marquee__box" ref="marqueeBox">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "CzwMarquee",
        props: {
            /**
             *  滚动方式[alternate:两端来回滚动, scroll: 一端滚到另一端(重复), slide: 一端滚到另一端(不重复)]
             */
            behavior: {
                type: String,
                default: 'scroll'
            },
            /**
             *  滚动方向[up: 向上, down:向下, left: 向左, right: 向右]
             */
            direction: {
                type: String,
                default: 'up'
            },
            /**
             *  宽度
             */
            width: {
                type: String,
                default: "100%"
            },
            /**
             * 高度
             */
            height: {
                type: String,
                default: "100%"
            },
            /**
             * 循环滚动次数(-1表示永久循环)
             */
            loop: {
                type: Number,
                default: -1
            },
            /**
             * 滚动速度（单位: px）
             */
            scrollAmount: {
                type: Number,
                default: 20
            },
            /**
             * 两次滚动之间的延迟时间(单位:ms)
             */
            scrollDelay: {
                type: Number,
                default: 1000
            },
            /**
             * 平滑滚动延迟
             */
            animateSpeed: {
                type: Number,
                default: 300
            }
        },
        mounted() {
            let $marquee = $(this.$refs.marquee);
            let $marqueeBox = $(this.$refs.marqueeBox);

            if (this.scrollDelay < this.animateSpeed) {
                this.animateSpeed = this.scrollDelay;
            }

            if (this.direction == 'up') {
                $marqueeBox.css('top', '0');

                window.setInterval(() => {
                    if ($marqueeBox.height() - $marquee.height() > Math.abs($marqueeBox.position().top)) {
                        $marqueeBox.stop().animate({top: '-=' + this.scrollAmount}, this.animateSpeed);
                    } else {
                        $marqueeBox.stop().animate({top: '0'}, this.animateSpeed);
                    }
                }, this.scrollDelay);
            } else if (this.direction == 'down') {
                $marqueeBox.css('bottom', '0');

                window.setInterval(() => {
                    if ($marqueeBox.position().top < 0) {
                        $marqueeBox.stop().animate({bottom: '-=' + this.scrollAmount}, this.animateSpeed);
                    } else {
                        $marqueeBox.stop().animate({bottom: '0'}, this.animateSpeed);
                    }
                }, this.scrollDelay);
            } else if (this.direction == 'left') {
                // @TODO
            }


        }
    }
</script>

<style scoped lang="scss">
    .m-marquee {
        position: relative;
        overflow: auto;
        -ms-scroll-chaining: chained;
        -ms-overflow-style: none;
        -ms-content-zooming: zoom;
        -ms-scroll-rails: none;
        -ms-content-zoom-limit-min: 100%;
        -ms-content-zoom-limit-max: 500%;
        -ms-scroll-snap-type: proximity;
        -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
        -ms-overflow-style: none;
        /*火狐下隐藏滚动条*/
        overflow: -moz-scrollbars-none;

        &::-webkit-scrollbar {
           background: transparent;
        }

        &__box {
            position: absolute;
            left: 0;
        }
    }

</style>