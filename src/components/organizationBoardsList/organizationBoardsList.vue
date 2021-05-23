<template>
    <div>
        <ul class="flex flex-wrap">
            <li
                class="rounded flex items-start flex-basis-200 flex-basis-full-md mb-4 min-height-80 md:mr-4 mr-0"
                v-for="board in boards"
                :key="board.id"
                :style="{'backgroundColor': board.prefs.backgroundColor}">
                    <router-link
                        class="fw-700 color--light block h-full w-full py-4 px-4 leading-snug"
                        :to="`/boards/${board.id}`">
                        {{ board.name }}
                    </router-link>
            </li>
            <li 
                @click="createNewBoard = true;"
                class="fs-12 fw-700 bg--medium hover--darken py-8 mb-4 px-4 cursor-pointer text-center rounded flex-basis-200 flex-basis-full-md">
                Create New Board
            </li>
        </ul>

        <transition name="fade" mode="in-out">
            <create-board-form
                v-if="createNewBoard"
                @close="createNewBoard = false;"
                @save="submitCreateBoard">
            </create-board-form>
        </transition>
    </div>
</template>

<script src="./organizationBoardsList.js"></script>