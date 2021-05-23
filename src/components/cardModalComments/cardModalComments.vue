<template>
    <div class="mt-2">
        <!-- add new comment -->
        <div class="flex items-start py-3">
            <img
                class="w-8 h-8 mr-2 flex-shrink-0"
                :class="{'rounded-full': !user.avatarUrl}"
                :src="user.avatarUrl ? `${user.avatarUrl}/170.png` : 'https://via.placeholder.com/170'">
            
            <div class="flex-grow">
                <textarea
                    @focus="addNewComment = true;"
                    :rows="addNewComment ? '3' : '1'"
                    v-model="newComment"
                    class="input--border w-full"
                    placeholder="Write a comment">
                </textarea>
                <div v-if="addNewComment" class="flex items-center justify-end mt-2">
                    <button class="button mr-2" @click="hideAddNewComment();">Cancel</button>
                    <button class="button button--success" @click="$emit('createComment', newComment); hideAddNewComment();">Save</button>
                </div>
            </div>
        </div>
        <!-- /add new comment -->
        <div
            class="flex items-start px-2 py-3"
            v-for="(comment, index) in comments"
            :key="comment.id"
            :class="{'comment-highlight': $route.hash && $route.hash === `#comment-${comment.id}`}"
            :id="`comment-${comment.id}`">
                <img
                    class="w-8 h-8 mr-2 flex-shrink-0"
                    :class="{'rounded-full': !comment.memberCreator.avatarUrl}"
                    :src="comment.memberCreator.avatarUrl ? `${comment.memberCreator.avatarUrl}/170.png` : 'https://via.placeholder.com/170'">

                <div class="flex-grow">
                    <h3 class="fs-12 fw-700 mb-2">
                        {{ comment.memberCreator.fullName }}
                        <span class="fs-11 text--medium fw-400 ml-1">{{ comment.date | moment("from", "now") }}</span>
                    </h3>
                    <div>
                        <p 
                            v-if="!comment.edit"
                            class="input--border inline-block">
                            {{ comment.data.text }}
                        </p>

                        <edit-card-modal-field
                            v-else
                            @close="toggleEdit(index)"
                            @save="updateComment($event, comment, index)"
                            :field="'text'"
                            :value="comment.data.text"
                            :placeholder="'You have not typed anything'"
                            :single-line="false">
                        </edit-card-modal-field>
                    </div>
                    
                    <div
                        class="flex items-center flex-wrap flex-basis-full mt-3" 
                        v-if="!comment.edit && user.id == comment.memberCreator.id">
                            <p class="text--medium underline cursor-pointer fs-12 mr-3" @click="toggleEdit(index)">Edit</p>
                            <p class="text--medium underline cursor-pointer fs-12" @click="$emit('removeComment', comment.id)">Delete</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script src="./cardModalComments.js"></script>

<style lang="scss">
.comment-highlight{
    border-left: 2px solid #42b6f5;
    background-color: rgba(#42b6f5, 0.1);
}
</style>