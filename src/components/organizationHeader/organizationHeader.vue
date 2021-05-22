<template>
    <div class="bg--light py-10">
        <div class="flex items-center justify-center">
            <img 
                class="rounded mr-4 object-cover w-20 h-20"
                :src="data.logoUrl ? `${data.logoUrl}/${headerLogoSize}.png` : 'https://via.placeholder.com/170'">
            
            <div>
                <h3 class="text-lg font-bold text--dark mb-2">{{ data.displayName }}</h3>
                <p class="text-sm ">{{ data.teamType }}</p>
            </div>
        </div>
        
    </div>
</template>

<script src="./organizationHeader.js"></script>