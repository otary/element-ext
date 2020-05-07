<template>
   <div>
       <div>
           <b>czw-join:</b> {{ list | czw-join }}
       </div>
       <div>
           <b>czw-join("+"):</b> {{ list | czw-join('+') }}
       </div>
   </div>
</template>

<script>
    export default {
        name: "FiltersIndex",
        data(){
            return {
                list: ['张三', '李四', '王五']
            }
        }
    }
</script>

<style scoped>

</style>
