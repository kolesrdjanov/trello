<template>
    <div class="h-full">
        <div class="board--header flex items-center px-4" v-if="board">
            <div>
                <h4 
                    v-if="!editMode"
                    @click="initEditMode"
                    class="text--light fw-700 cursor-pointer">
                        {{ board.name }}
                </h4>
                <input
                    v-else
                    ref="boardNameInput"
                    type="text"
                    class="input--main"
                    @keyup.enter="updateBoardName"
                    @keyup.esc="editMode = false;"
                    v-model.trim="board.name">
            </div>

            <button
                class="button button--outline button--icon ml-auto"
                @click="boardSidebar = true;">
                    <span class="icon-menu-white"></span>
                    Show menu
            </button>
        </div>
        <div class="p-4 flex items-start board--wrapper">
            <draggable
                class="flex items-start"
                v-model="lists"
                group="lists"
                @change="updateListPosition">
                    <board-list
                        @list-archived="getLists"
                        v-for="list in lists"
                        :key="list.id"
                        :list="list">
                    </board-list>
            </draggable>

            <div class="p-2  bg--medium rounded mr-6 board--list">
                <div class="flex items-center">
                    <input
                        class="input--main mr-2"
                        v-model.trim="newListTitle"
                        ref="listNameInput"
                        @keyup.enter="addNewList();"
                        type="text" placeholder="Enter list title...">
                    
                    <button
                        class="button button--main"
                        @click="addNewList();">
                            Add
                    </button>
                </div>
            </div>
        </div>

        <transition name="fade">
            <board-sidebar
                v-if="boardSidebar"
                @removeBoard="removeBoard"
                @close="boardSidebar = false">
            </board-sidebar>
        </transition>
        <router-view></router-view>
    </div>
</template>

<script src="./board.js"></script>