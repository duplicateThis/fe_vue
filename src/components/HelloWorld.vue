<template>
    <div>
        <el-button @click="getData">按钮</el-button>
    </div>
</template>

<script>
import {apiRes} from '../api/index.js'
export default {
    name: 'HelloWorld',
    data () {
        return {

        }
    },
  methods: {
    async getData () {
        const a = await apiRes()
        console.log(a)
    }
  }
}
</script>

<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
