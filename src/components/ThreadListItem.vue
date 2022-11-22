<template>
    <div class="thread">
        <div>
            <p>
                <a href="#">{{thread.title}}</a>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}</a>, {{thread.publishedAt}}.
            </p>
        </div>
        <div class="activity">
            <p class="replies-count">
                {{repliesCount}} replies
            </p>
        </div>
    </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
    props: {
        thread: {
            type: Object,
            required: true
        }
    },
    computed: {
        repliesCount() {
            return Object.keys(this.thread.posts).length - 1
        },
        user() {
            return sourceData.users[this.thread.userId]
        }
    }
}
</script>