<template>
    <section>

        <!-- 滚动条示例 -->
        <fieldset>
            <legend>滚动条美化</legend>
            <div style="width: 500px; height: 100px; overflow: auto;" class="czw-border czw-scrollbar-beautify-6">
                <div style="width: 2000px;height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>隐藏滚动条</legend>
            <div style="height: 100px; overflow: auto;" class="czw-border czw-scrollbar-hide">
                <div style="height: 2000px;">
                    内容
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>区域遮罩</legend>
            <div style="position: relative; height: 100px;">
                <div class="czw-mask-absolute"></div>
            </div>
        </fieldset>

        <fieldset>
            <legend>全局遮罩</legend>
            <div>
                {{maskFixedHtml}}
            </div>
        </fieldset>

        <fieldset>
            <legend>七彩颜色条</legend>
            <div style="height: 5px;" class="czw-bg-colorful"></div>
        </fieldset>

        <fieldset>
            <legend>七彩边框</legend>
            <div style="border: 2px solid transparent;" class="czw-border-colorful">
                内容
            </div>
        </fieldset>



        <czw-link>ssdfsdfsd</czw-link>


        <div class="box-shadow">
            test
        </div>

        <div class="box-hover">

            aaaaa
        </div>

        <div class="box-hover2">

            bbb
        </div>


        <div class="dot">

        </div>

    </section>
</template>

<script>


    export default {
        name: "Home",
        data() {
            return {
                maskFixedHtml:`<div class="czw-mask-fixed"></div>`
            }
        },
        components: {
            "czw-link": () => import("@/components/Link")
        }
    }
</script>


<style>

    .pin:after {
        content: '';
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: #2f2f2f;
        position: absolute;
        border-radius: 50%;
    }

    .pulse {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        height: 14px;
        width: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: 11px 0px 0px -12px;
        -webkit-transform: rotateX(55deg);
        -moz-transform: rotateX(55deg);
        -o-transform: rotateX(55deg);
        -ms-transform: rotateX(55deg);
        transform: rotateX(55deg);
        z-index: -2;
    }

    .pulse:after {
        content: "";
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        margin: -13px 0 0 -13px;
        -webkit-animation: pulsate 1s ease-out;
        -moz-animation: pulsate 1s ease-out;
        -o-animation: pulsate 1s ease-out;
        -ms-animation: pulsate 1s ease-out;
        animation: pulsate 1s ease-out;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        -webkit-box-shadow: 0 0 1px 2px #89849b;
        box-shadow: 0 0 1px 2px #89849b;
        -webkit-animation-delay: 1.1s;
        -moz-animation-delay: 1.1s;
        -o-animation-delay: 1.1s;
        -ms-animation-delay: 1.1s;
        animation-delay: 1.1s;
    }


    .dot {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;

        animation: pulsate 1s ease-out infinite;

        /*  box-shadow: 0 0 1px 2px #89849b;*/
    }

    @keyframes pulsate {
        0% {
            transform: scale(0.1, 0.1);
            opacity: 0;
            /* -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";*/
            filter: alpha(opacity=0);
        }
        50% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
        100% {
            /*-webkit-transform: scale(1.2, 1.2);
            -moz-transform: scale(1.2, 1.2);
            -o-transform: scale(1.2, 1.2);
            -ms-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2);*/

            transform: scale(2, 2);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }


    /*  @-moz-keyframes bounce {
          0% {
              opacity: 0;
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              filter: alpha(opacity=0);
              -webkit-transform: translateY(-2000px) rotate(-45deg);
              -moz-transform: translateY(-2000px) rotate(-45deg);
              -o-transform: translateY(-2000px) rotate(-45deg);
              -ms-transform: translateY(-2000px) rotate(-45deg);
              transform: translateY(-2000px) rotate(-45deg);
          }
          60% {
              opacity: 1;
              -ms-filter: none;
              filter: none;
              -webkit-transform: translateY(30px) rotate(-45deg);
              -moz-transform: translateY(30px) rotate(-45deg);
              -o-transform: translateY(30px) rotate(-45deg);
              -ms-transform: translateY(30px) rotate(-45deg);
              transform: translateY(30px) rotate(-45deg);
          }
          80% {
              -webkit-transform: translateY(-10px) rotate(-45deg);
              -moz-transform: translateY(-10px) rotate(-45deg);
              -o-transform: translateY(-10px) rotate(-45deg);
              -ms-transform: translateY(-10px) rotate(-45deg);
              transform: translateY(-10px) rotate(-45deg);
          }
          100% {
              -webkit-transform: translateY(0) rotate(-45deg);
              -moz-transform: translateY(0) rotate(-45deg);
              -o-transform: translateY(0) rotate(-45deg);
              -ms-transform: translateY(0) rotate(-45deg);
              transform: translateY(0) rotate(-45deg);
          }
      }
      @-webkit-keyframes bounce {
          0% {
              opacity: 0;
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              filter: alpha(opacity=0);
              -webkit-transform: translateY(-2000px) rotate(-45deg);
              -moz-transform: translateY(-2000px) rotate(-45deg);
              -o-transform: translateY(-2000px) rotate(-45deg);
              -ms-transform: translateY(-2000px) rotate(-45deg);
              transform: translateY(-2000px) rotate(-45deg);
          }
          60% {
              opacity: 1;
              -ms-filter: none;
              filter: none;
              -webkit-transform: translateY(30px) rotate(-45deg);
              -moz-transform: translateY(30px) rotate(-45deg);
              -o-transform: translateY(30px) rotate(-45deg);
              -ms-transform: translateY(30px) rotate(-45deg);
              transform: translateY(30px) rotate(-45deg);
          }
          80% {
              -webkit-transform: translateY(-10px) rotate(-45deg);
              -moz-transform: translateY(-10px) rotate(-45deg);
              -o-transform: translateY(-10px) rotate(-45deg);
              -ms-transform: translateY(-10px) rotate(-45deg);
              transform: translateY(-10px) rotate(-45deg);
          }
          100% {
              -webkit-transform: translateY(0) rotate(-45deg);
              -moz-transform: translateY(0) rotate(-45deg);
              -o-transform: translateY(0) rotate(-45deg);
              -ms-transform: translateY(0) rotate(-45deg);
              transform: translateY(0) rotate(-45deg);
          }
      }
      @-o-keyframes bounce {
          0% {
              opacity: 0;
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              filter: alpha(opacity=0);
              -webkit-transform: translateY(-2000px) rotate(-45deg);
              -moz-transform: translateY(-2000px) rotate(-45deg);
              -o-transform: translateY(-2000px) rotate(-45deg);
              -ms-transform: translateY(-2000px) rotate(-45deg);
              transform: translateY(-2000px) rotate(-45deg);
          }
          60% {
              opacity: 1;
              -ms-filter: none;
              filter: none;
              -webkit-transform: translateY(30px) rotate(-45deg);
              -moz-transform: translateY(30px) rotate(-45deg);
              -o-transform: translateY(30px) rotate(-45deg);
              -ms-transform: translateY(30px) rotate(-45deg);
              transform: translateY(30px) rotate(-45deg);
          }
          80% {
              -webkit-transform: translateY(-10px) rotate(-45deg);
              -moz-transform: translateY(-10px) rotate(-45deg);
              -o-transform: translateY(-10px) rotate(-45deg);
              -ms-transform: translateY(-10px) rotate(-45deg);
              transform: translateY(-10px) rotate(-45deg);
          }
          100% {
              -webkit-transform: translateY(0) rotate(-45deg);
              -moz-transform: translateY(0) rotate(-45deg);
              -o-transform: translateY(0) rotate(-45deg);
              -ms-transform: translateY(0) rotate(-45deg);
              transform: translateY(0) rotate(-45deg);
          }
      }
      */


    @keyframes bounce {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            -webkit-transform: translateY(-2000px) rotate(-45deg);
            -moz-transform: translateY(-2000px) rotate(-45deg);
            -o-transform: translateY(-2000px) rotate(-45deg);
            -ms-transform: translateY(-2000px) rotate(-45deg);
            transform: translateY(-2000px) rotate(-45deg);
        }
        60% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transform: translateY(30px) rotate(-45deg);
            -moz-transform: translateY(30px) rotate(-45deg);
            -o-transform: translateY(30px) rotate(-45deg);
            -ms-transform: translateY(30px) rotate(-45deg);
            transform: translateY(30px) rotate(-45deg);
        }
        80% {
            -webkit-transform: translateY(-10px) rotate(-45deg);
            -moz-transform: translateY(-10px) rotate(-45deg);
            -o-transform: translateY(-10px) rotate(-45deg);
            -ms-transform: translateY(-10px) rotate(-45deg);
            transform: translateY(-10px) rotate(-45deg);
        }
        100% {
            -webkit-transform: translateY(0) rotate(-45deg);
            -moz-transform: translateY(0) rotate(-45deg);
            -o-transform: translateY(0) rotate(-45deg);
            -ms-transform: translateY(0) rotate(-45deg);
            transform: translateY(0) rotate(-45deg);
        }
    }
</style>

<style scoped lang="scss">
    @import "~@scss/index";


    .test2 {
        @include triangle(left, 8px);
    }


    .box-shadow {
        box-shadow: 0px 14px 26px 0px rgba(0, 0, 0, 0.1);
    }

    // 盒子 Hover
    .box-hover {
        // box-shadow: 0px 1px 2px 0px rgba(84, 107, 107, .4);
        transition: all .2s linear;

        &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
            transform: translate3d(0, -2px, 0);
        }
    }

    .box-hover2 {
        transition: transform .5s ease;

        &:hover {
            transform: translateX(10px);
        }
    }

</style>