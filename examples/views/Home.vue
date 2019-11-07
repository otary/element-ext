<template>
    <section>

        <czw-link>ssdfsdfsd</czw-link>


        <div class="dot">

        </div>

    </section>
</template>

<script>


    export default {
        name: "Home",
        data() {
            return {}
        },
        components: {
            "czw-link": () => import("@/components/Link")
        }
    }
</script>


<style scoped lang="scss">

    @import "~@scss/index";

    .dot {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        border-radius: 50%;

        animation: czw 1s ease-out infinite;

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

</style>