<template>
    <div>
        <input
            v-if="singleLine"
            type="text"
            class="input--main rounded w-full"
            ref="cardFieldInput"
            v-model="model"
            :placeholder="placeholder">

        <textarea
            v-else
            class="input--main rounded w-full"
            rows="6"
            ref="cardFieldInput"
            v-model="model"
            :placeholder="placeholder">
        </textarea>

        <div class="flex items-center justify-end mt-2">
            <button class="button mr-2" @click="close();">Cancel</button>
            <button class="button button--success" @click="submit();">Save</button>
        </div>
    </div>
</template>

<script src="./editCardModalField.js"></script>