<template>
    <div class="p-2 bg--medium rounded mr-4 board--list">
        <div class="flex items-center board--list__header">
            <p 
                class="input--main__label fw-700"
                v-if="!editMode"
                @click="initEditMode">
                    {{ list.name }}
            </p>
            <input
                v-else
                :ref="`${list.id}-list-name-input`"
                type="text"
                class="input--main"
                @keyup.enter="updateListName"
                @keyup.esc="editMode = false;"
                @blur="editMode = false;"
                v-model.trim="list.name">

            <div class="relative ml-auto mr-2" v-click-outside="closeListHeaderMenu">
                <div
                    class="icon-menu cursor-pointer" 
                    @click="showListHeaderMenu = !showListHeaderMenu;">
                </div>
                <transition name="fade">
                    <board-list-header-menu
                        @rename="initEditMode();"
                        @archive="archiveList();"
                        @close="showListHeaderMenu = false;"
                        :show="showListHeaderMenu">
                    </board-list-header-menu>
                </transition>
            </div>
        </div>

        <draggable
            @change="updateCardPosition(list.id, $event)"
            v-model="cards" 
            group="cards" 
            class="mt-1 px-2 mb-4">
            <div 
                v-for="card in cards" 
                :key="card.id">
                    <card :card="card"></card>
            </div>
        </draggable>

        <div class="px-2 mb-1 flex">
            <p 
                v-if="!showAddNewCard"
                @click="showAddNewCard = true;" 
                class="fw-700 fs-12 cursor-pointer ml-auto">
                    + Add card
            </p>

            <list-add-new-card
                :list-id="list.id"
                v-if="showAddNewCard"
                @close="showAddNewCard = false"
                @save="addNewCard">
            </list-add-new-card>
        </div>
    </div>
</template>

<script src="./boardList.js"></script>