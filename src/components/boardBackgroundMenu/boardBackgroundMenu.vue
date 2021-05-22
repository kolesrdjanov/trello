<template>
    <div class="board--form w-full py-4 px-4">
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
    </div>
</template>

<script src="./boardBackgroundMenu.js"></script>

<style lang="scss">
.board--form{
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