<template>
    <div>
        <el-row>
            <el-button type="primary" @click="createQueryString">createQueryString</el-button>
        </el-row>
    </div>
</template>

<script>
    import {url} from '@/util/index.js';
    export default {
        name: "Url",
        methods: {
            createQueryString(){
                let queryString = url.createQueryString({
                    a: '1',
                    b: '2',
                    c: '3'
                });
                this.$notify({
                    title: 'createQueryString',
                    dangerouslyUseHTMLString: true,
                    message: '<p>{a: 1, b: 2, c: 3}</p>' +
                        '<p> => ' + queryString + '</p>'
                });
            }
        }
    }
</script>

<style scoped>

</style>
