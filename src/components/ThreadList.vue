<template>
    <div class="thread-list">
        <h2 class="list-title">Threads</h2>
        <thread-list-item 
            v-for="thread in threads" 
            :key="thread['.key']" 
            :thread="thread"
        />
    </div>
</template>
<script>
import ThreadListItem from './ThreadListItem.vue'
export default {
    props: {
        threads: {
            type: Array,
            required: true
        }
    },
    components: {
        ThreadListItem
    }
}
</script>