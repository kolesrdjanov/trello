<template>
    <div class="modal--wrapper" v-if="card">
        <div class="modal modal--large flex">
            <div class="icon-close block ml-auto" @click="close();"></div>
            
            <div class="flex-grow">
                <!-- header -->
                <div class="modal--header flex items-start mb-6">
                    <div class="mr-2">
                        <img src="@/assets/img/icon-card.svg" width="16">
                    </div>
                    <div class="flex-grow">
                        <div class="relative">
                            <h2 
                                @click="editName = true;"
                                v-if="!editName"
                                class="fw-700 fs-20 flex-grow mb-3 cursor-pointer">
                                {{ card.name }}
                            </h2>
                            <edit-card-modal-field
                                v-else
                                @close="editName = false;"
                                @save="updateCardField"
                                :field="'name'"
                                :value="card.name"
                                :placeholder="'Add a card title...'"
                                :single-line="true">
                            </edit-card-modal-field>
                        </div>
                        
                        <p class="fs-12 fw-400">In list <span class="fw-500">{{ card.list.name }}</span></p>
                    </div>
                </div>
                <!-- /header -->

                <div class="modal--body">
                    <!-- labels -->
                    <div  v-if="card.labels.length" class="mb-8 pl-6">
                        <h4 class="uppercase fs-11 fw-600 text--medium mb-2">Labels</h4>
                        <ul class="flex items-start">
                            <li 
                                v-for="label in card.labels"
                                :key="label.id"
                                class="card--label card--label__modal rounded mr-2"
                                :class="[`card--label__${label.color}`, label.name ? 'card--label__modal-text' : 'card--label__modal-empty']">
                                    <span v-if="label.name" class="text--light fs-12 fw-700">{{ label.name }}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- /labels -->

                    <!-- description -->
                    <div class="flex items-start mb-8">
                        <div class="mr-2">
                            <img src="@/assets/img/icon-menu.svg" width="16">
                        </div>
                        <div class="flex-grow">
                            <h2 class="fw-700 fs-14 mb-4">Description</h2>
                            <div class="relative">
                                <p 
                                    @click="editDescription = true;"
                                    v-if="!editDescription"
                                    class="field-placeholder p-4 fs-12 fw-500 rounded cursor-pointer leading-normal">
                                        {{ card.desc ? card.desc : 'Add more detailed description.' }}
                                </p>

                                <edit-card-modal-field
                                    @close="editDescription = false;"
                                    @save="updateCardField"
                                    :field="'desc'"
                                    :value="card.desc"
                                    :placeholder="'Add a more detailed description..'"
                                    :single-line="false"
                                    v-else>
                                </edit-card-modal-field>
                            </div>
                        </div>
                    </div>
                    <!-- /description -->

                    <!-- activity -->
                    <div class="flex items-start">
                        <div class="mr-2">
                            <img src="@/assets/img/icon-menu.svg" width="16">
                        </div>
                        <div class="flex-grow">
                            <h2 class="fw-700 fs-14 mb-2">Activity</h2>
                            <card-modal-comments
                                @createComment="createComment"
                                @updateComment="updateComment"
                                @removeComment="removeComment"
                                :user="user"
                                :comments="actions">
                            </card-modal-comments>
                        </div>
                    </div>
                    <!-- /activity -->
                </div>
            </div>

            <!-- modal sidebar -->
            <div class="flex-basis-140 ml-6">
                <h4 class="uppercase fs-11 fw-600 text--medium mb-2">Actions</h4>

                <button 
                    class="button--icon w-full" 
                    @click="archiveCard();">
                    <span class="icon-archive"></span>
                    Archive
                </button>
            </div>
            <!-- /modal sidebar -->
        </div>
    </div>
</template>

<script src="./cardModal.js"></script>