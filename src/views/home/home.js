import { OrganizationService } from "@/api/organizationApi";

import OrganizationHeader from "@/components/organizationHeader/organizationHeader.vue";
import OrganizationBoardsList from "@/components/organizationBoardsList/organizationBoardsList.vue";

export default {
    components: {
        OrganizationHeader,
        OrganizationBoardsList
    },

    data() {
        return {
            organization: null
        };
    },

    methods: {
        getOrganization,
        getOrganizationBoards
    },

    mounted() {
        this.getOrganization();
        this.getOrganizationBoards();
    }
};

async function getOrganization() {
    try {
        const params = {
            fields: "all"
        };
        const { data } = await OrganizationService.getOrganization(process.env.VUE_APP_TRELLO_ORG_ID, params);

        this.organization = {
            ...data,
            boards: []
        };
    } catch (error) {
        console.warn(error);
    }
}

async function getOrganizationBoards() {
    try {
        const params = {
            fields: "all"
        }
        const { data } = await OrganizationService.getOrganizationBoards(process.env.VUE_APP_TRELLO_ORG_ID, params);

        this.organization.boards = data;
    } catch (error) {
        console.warn(error);
    }
}
