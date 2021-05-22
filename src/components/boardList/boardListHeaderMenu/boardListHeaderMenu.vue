<template>
    <div
        class="board--list__header-menu" 
        v-if="show">
        <ul>
            <li class="py-3 px-3">
                <p 
                    @click="$emit('archive'); close();"
                    class="fs-11 fw-600 cursor-pointer mb-3">
                        Archive
                </p>
                <p 
                    @click="$emit('rename'); close();"
                    class="fs-11 fw-600 cursor-pointer">
                        Rename
                </p>
            </li>
        </ul>
    </div>
</template>

<script src="./boardListHeaderMenu.js"></script>

<style lang="scss">
.board--list__header-menu{
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.09);
    min-width: 80px;

    p{
        white-space: nowrap;
    }
}
</style>