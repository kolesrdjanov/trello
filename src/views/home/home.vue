<template>
    <div>
        <section v-if="organization">
            <article
                class="mb-10">
                
                <organization-header
                    :data="organization">
                </organization-header>

                <div class="container border-gray-200 pt-10 pb-6">
                    <organization-boards-list
                        v-if="organization.boards.length"
                        :boards="organization.boards"
                        @boardListChanged="getOrganizationBoards">
                    </organization-boards-list>
                </div>
            </article>
        </section>
    </div>
</template>

<script src="./home.js"></script>