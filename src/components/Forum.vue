<template>
    <div>
        <h1>
            Welcome to the Forum
        </h1>
        <thread-list :threads="threads"/>
    </div>
</template>
<script>
import sourceData from '../data.json'
import ThreadList from './ThreadList.vue'

export default {
    components: {
        ThreadList
    },
    data() {
        return {
            threads: Object.values(sourceData.threads)
        }
    }
}
</script>