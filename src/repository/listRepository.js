import { ListService } from "@/api/listApi";

export default {
    getBoardLists,
    updateList,
    createList,
    archiveList
}

function getBoardLists(id) {
    return ListService.getBoardLists(id);
}

function updateList(request) {
    return ListService.updateList(request);
}

function createList(request) {
    return ListService.createList(request);
}

function archiveList(request) {
    return ListService.archiveList(request)
}