<template>
    <div class="main--wrapper" :style="[ background ? {'backgroundColor': board.prefs.backgroundColor} : '']">
        <top-navigation></top-navigation>
        <router-view></router-view>
    </div>
</template>

<script src="./mainView.js"></script>