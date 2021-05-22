<template>
    <header class="nav--header flex items-center" :style="[ background ? {'backgroundColor': 'rgba(0, 0, 0, 0.15'} : '']">
        <router-link
            :to="'/home'">
            <img src="@/assets/img/img-logo.png" class="nav--header__logo cursor-pointer">
        </router-link>
        
        <div class="ml-auto" v-if="user">
            <div class="flex items-center">
                <p class="color--light fw-500">{{ user.fullName }}</p>
                <img class="nav--header__avatar ml-2" :src="`${user.avatarUrl}/170.png`">
            </div>
        </div>
    </header>
</template>

<script src="./topNavigation.js"></script>