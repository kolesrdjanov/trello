import { BoardService } from "@/api/boardApi";

export default {
    getBoard,
    createBoard,
    updateBoard,
    getBoardActions,
    removeBoard
}

function getBoard(id) {
    return BoardService.getBoard(id);
}

function createBoard(request) {
    return BoardService.createBoard(request);
}

function updateBoard(request) {
    return BoardService.updateBoard(request);
}

function getBoardActions(id) {
    return BoardService.getBoardActions(id);
}

function removeBoard(id) {
    return BoardService.removeBoard(id);
}
