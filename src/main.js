import Vue from "vue"
import App from "./App.vue"
import "@/assets/scss/main.scss";
import "@/assets/scss/tailwind.scss";
import router from "./router"
import store from './store'
import utils from "./utils";
import moment from "vue-moment";

// import repository methods that call api service methods
import boardRepository from "./repository/boardRepository";
import listRepository from "./repository/listRepository";
import cardRepository from "./repository/cardRepository";

export const eventBus = new Vue();

Vue.prototype.$utils = utils;
Vue.prototype.$boardRepository = boardRepository;
Vue.prototype.$listRepository = listRepository;
Vue.prototype.$cardRepository = cardRepository;
Vue.prototype.$eventBus = eventBus;

Vue.use(moment);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
