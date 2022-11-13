<template>
    <div>
        <div v-for="thread in threads">
            <h1>{{thread.title}}</h1>
            <p>
                By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
                <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
            </p>
            <div class="post-list">
                <div v-for="postId in thread.posts" class="post">
                    <div class="user-info">
                        <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
                        <a href="#">
                            <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                        </a>
                        <p class="desktop-only text-small">107 posts</p>
                        <p class="desktop-only text-small">23 threads</p>
                        <span class="online desktop-only">online</span>
                    </div>
                    <div class="post-content">
                        <div>
                            <p>
                                Is horseradish and Wasabi the same thing? I've heard so many different things.<br><br>
                                I want to know once and for all.
                            </p>
                        </div>
                        <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
                    </div>
                    <div class="post-date text-faded">
                        6 hours ago
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import sourceData from '../data.json'
export default {
    name: 'thread',
    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
        }
    }
}
</script>