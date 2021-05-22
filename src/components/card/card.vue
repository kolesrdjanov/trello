<template>
    <div 
        class="board-card px-2 py-2 rounded cursor-pointer">
        <ul class="flex items-start mb-2" v-if="card.labels && card.labels.length">
            <li 
                v-for="label in card.labels"
                :key="label.id"
                class="card--label rounded mr-2 w-8 h-2"
                :class="[`card--label__${label.color}`, label.name]">
            </li>
        </ul>
        <div 
            class="flex items-start">
            <p 
                v-if="!isEditMode"
                @click="$router.push({ name: 'cardDetails', params: { boardId: card.idBoard, cardId: card.id }});"
                class="fs-12 fw-500 flex-grow leading-normal">
                    {{ card.name }}
            </p>
            
            <div
                v-else 
                class="flex-grow mr-2 mb-2">

                <textarea
                    @keydown.enter.exact.prevent
                    @keyup.enter.exact="saveCardName();"
                    @keyup.esc="isEditMode = false; newCardName = ''"
                    type="text"
                    rows="1"
                    class="input--main w-full mb-1"
                    ref="cardNameInput"
                    maxlength="32"
                    v-model.trim="newCardName">
                </textarea>

                <button
                    @click="saveCardName();" 
                    class="button button--main button--small">
                        Save
                </button>
            </div>

            <div
                @click.stop.prevent="enableEdit();" 
                class="icon-pencil flex-shrink-0 cursor-pointer">
            </div>
        </div>
        <div class="flex items-center mt-1" v-if="card.badges.description || card.badges.comments">
            <div v-if="card.badges.description" class="icon-menu"></div>
            <div v-if="card.badges.comments" class="flex items-center">
                <div class="icon-comment ml-2 mr-1"></div>
                <p class="fs-12 fw-500 text--medium">{{ card.badges.comments }}</p>
            </div>
        </div>
    </div>
</template>

<script src="./card.js"></script>