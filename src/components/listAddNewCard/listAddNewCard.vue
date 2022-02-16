<template>
    <div class="flex items-center flex-wrap">
        <input
            class="input--main flex-basis-full"
            v-model.trim="model.name"
            maxlength="50"
            ref="cardNameInput"
            @keyup.enter="submit();"
            type="text" placeholder="Enter card title...">

        <div class="ml-auto mt-2 flex items-center">
            <button
                class="button button--cancel mr-2"
                @click="close();">
                    Cancel
            </button>
            
            <button
                class="button button--main"
                :disabled="saving"
                @click="submit();">
                    Add
            </button>
        </div>
    </div>
</template>

<script src="./listAddNewCard.js"></script>