import { CardService } from "@/api/cardApi";

export default {
    getCard,
    createCard,
    updateCard,
    archiveCard,
    getCardActions,
    createCardComment,
    updateCardAction,
    removeCardAction
}

function getCard(params) {
    return CardService.getCard(params);
}

function createCard(id) {
    return CardService.createCard(id);
}

function updateCard(request) {
    return CardService.updateCard(request);
}

function archiveCard(request) {
    return CardService.archiveCard(request);
}

function getCardActions(id) {
    return CardService.getCardActions(id);
}

function createCardComment(request) {
    return CardService.createCardComment(request);
}

function updateCardAction(request) {
    return CardService.updateCardAction(request);
}

function removeCardAction(id) {
    return CardService.removeCardAction(id);
}