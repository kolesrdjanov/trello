<template>
    <div>
        <div class="board--form__background"></div>
        <div class="board--form p-4 rounded">
            <input
                type="text"
                class="input--main input--border mb-2 w-full"
                placeholder="Give your board a name"
                v-model="title"
                ref="boardNameInput"
                maxlength="32">
            
            <ul class="flex flex-wrap items-center board--form__colors">
                <li 
                    @click="pickColor(index)"
                    class="p-3 rounded cursor-pointer"
                    :class="`bg--board__${color}`"
                    v-for="(color, index) in colors"
                    :key="`${index}_${color}`">
                        <img src="@/assets/img/icon-tick.svg" v-if="selectedColor === color">
                </li>
            </ul>

            <div class="flex items-center mt-4">
                <button class="button button--success mr-1" @click="title && title.length && submit();">Create</button>
                <button class="button button--cancel" @click="$emit('close')">Cancel</button>
                
            </div>
        </div>
    </div>
</template>

<script src="./createBoardForm.js"></script>

<style lang="scss">
.board--form__background{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.board--form{
    width: 300px;
    padding: 20px;
    background-color: #fff;
    z-index: 20;
    position: relative;

    .board--form__colors{
        width: 100%;

        li {
            transition: 0.2s all ease;
            position: relative;

            &:not(:last-of-type) {
                margin-right: 4px;
            }

            &:hover{
                opacity: 0.8;
            }

            img{
                width: 12px;
                height: 12px;
                position: absolute;
                left: calc(50% - 6px);
                top: calc(50% - 6px);
            }
        }
    }
}
</style>