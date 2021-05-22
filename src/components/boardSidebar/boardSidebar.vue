<template>
    <aside class="board--aside">
        <div
            v-if="!activeMenuItem" 
            class="flex items-center board--aside__menu py-4 px-4">
            <h2 class="fs-16 fw-700 text-center">Menu</h2>
            <div
                @click="close();" 
                class="icon-close ml-auto w-3 h-3 cursor-pointer">
            </div>
        </div>

        <div v-if="activeMenuItem">
            <div class="board--aside__menu flex items-center board--aside__menu py-4 px-4">
                <div
                    @click="setActiveMenuItem(null)" 
                    class="icon-back mr-3 w-3 h-3 cursor-pointer">
                </div>
                <h2 class="fs-16 fw-700 text-center">Background</h2>
            </div>
            
            <board-background-menu
                v-if="activeMenuItem === 'MENU_BACKGROUND'"
                @updateBoard="setBoard"
                :board="board">
            </board-background-menu>
        </div>

        
        
        <div class="divider"></div>

        <div class="py-4 px-4" v-if="!activeMenuItem">
            <!-- background -->
            <div class="flex items-center p-2 hover--medium rounded cursor-pointer">
                <div
                    :style="{'backgroundColor': board.prefs.backgroundColor}"
                    class="w-6 h-6 rounded mr-2">
                </div>
                <p class="fw-700 fs-12" @click="setActiveMenuItem('MENU_BACKGROUND')">Change background</p>
            </div>
            <!-- /background -->

            <!-- archived -->
            <div class="flex items-center p-2 hover--medium rounded cursor-pointer">
                <div class="icon-archive w-6 h-6 mr-2"></div>
                <p class="fw-700 fs-12">View archived</p>
            </div>
            <!-- /archived -->

            <!-- remove -->
            <div>
                <button 
                    @click="$emit('removeBoard')"
                    class="button button--danger text-center mx-auto py-3 px-4 block my-4">
                        Remove board
                </button>
            </div>
            <!-- /remove -->
        </div>

        <div class="divider"  v-if="!activeMenuItem"></div>

        <div class="py-4 px-4"  v-if="!activeMenuItem">
            <div v-if="actions">
                <h2 class="fw-700 fs-14 mb-4">Activity</h2>
                <div
                    v-for="action in actions"
                    :key="action.id"
                    class="flex items-start mb-4">
                        <img
                            :class="{'rounded-full': !action.memberCreator.avatarUrl}"
                            :src="action.memberCreator.avatarUrl ? `${action.memberCreator.avatarUrl}/170.png` : 'https://via.placeholder.com/170'" 
                            class="mr-2 w-8 h-8">
                        <div>
                            <p class="fw-700 fs-12 mb-2 leading-snug">
                                {{ action.memberCreator.fullName }}
                                <span v-if="action.type !== 'commentCard'" class="fw-400">did something, we have to map out translation keys which is a lot of work :(</span>
                                
                                <span v-else class="fw-400">
                                    did something with
                                    <router-link
                                        class="fw-400 input--border inline-block my-2"
                                        :to="`/boards/${action.data.board.id}/card/${action.data.card.id}#comment-${action.id}`">
                                        {{ action.data.text }}                                    
                                    </router-link>
                                </span>
                            </p>
                            <p class="fs-11 text--medium fw-500">{{ action.date | moment("from", "now") }}</p>
                        </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script src="./boardSidebar.js"></script>