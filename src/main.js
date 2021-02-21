import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter('formatCurrency', function(amount) {
    var formattedAmount = 0.00;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    formattedAmount = formatter.format(amount);
    return formattedAmount
})

Vue.prototype.$orders = [{
        id: 1,
        orderId: 1,
        customer: 1,
        qty: 11,
        status: "Order Received",
        itemID: 1
    },
    {
        id: 2,
        orderId: 2,
        customer: 2,
        qty: 3,
        status: "Ready to serve",
        itemID: 3
    },
    {
        id: 3,
        orderId: 2,
        customer: 2,
        qty: 5,
        status: "Ready to serve",
        itemID: 2
    },
    {
        id: 4,
        orderId: 2,
        customer: 2,
        qty: 2,
        status: "Ready to serve",
        itemID: 6
    },
    {
        id: 5,
        orderId: 3,
        customer: 3,
        qty: 3,
        status: "Order Received",
        itemID: 2
    },
    {
        id: 6,
        orderId: 4,
        customer: 4,
        qty: 1,
        status: "Ready to serve",
        itemID: 4
    },
    {
        id: 7,
        orderId: 5,
        customer: 5,
        qty: 4,
        status: "Ready to serve",
        itemID: 2
    },
    {
        id: 8,
        orderId: 6,
        customer: 6,
        qty: 3,
        status: "Preparing",
        itemID: 3
    }
];

Vue.prototype.$menu = {
    1: {
        name: "Pizza",
        price: 10.5
    },
    2: {
        name: "Shawarma",
        price: 15.9
    },
    3: {
        name: "Burger",
        price: 6.6
    },
    4: {
        name: "Ichiraku Ramen",
        price: 10
    },
    5: {
        name: "Meat",
        price: 20
    },
    6: {
        name: "Cool drinks",
        price: 7.5
    }
};

Vue.prototype.$customers = {
    1: {
        name: "kakashi",
        lastname: "Hatake",
        addr1: "3rd street",
        addr2: "",
        street: "north street",
        city: "hatake clan",
        state: "east",
        country: "konoha",
        landmark: "Behind shougan studio",
        phone: "908765321",
        email: "test@test.com",
        zip: "6767"
    },
    2: {
        name: "Itachi",
        lastname: "Uchiha",
        addr1: "3rd street",
        addr2: "",
        street: "west",
        city: "uchiha",
        state: "west",
        country: "konoha",
        landmark: "Behind uchiha police force building",
        phone: "908765321",
        email: "test@test.com",
        zip: "2323"
    },
    3: {
        name: "Luffy",
        lastname: "Monkey D",
        addr1: "22 floor",
        addr2: "Thousand sunny apartment",
        street: "2nd street",
        city: "laughtale",
        state: "monnkey mountains",
        country: "East blue",
        landmark: "Behind walmart",
        phone: "908765321",
        email: "test@test.com",
        zip: "232"
    },
    4: {
        name: "Shanks",
        lastname: "Xebec D",
        addr1: "2nd block",
        addr2: "Grape gardens",
        street: "golden back street",
        city: "ebisu town",
        state: "itachi port",
        landmark: "Behind walmart",
        phone: "908765321",
        email: "test@test.com",
        country: "wano",
        zip: "2121"
    },
    5: {
        name: "senku",
        lastname: "Ishihami",
        addr1: "3rd cave",
        addr2: "tokyo ruins",
        street: "first street",
        city: "shinigami village",
        landmark: "Behind walmart ruins",
        phone: "908765321",
        email: "test@test.com",
        state: "tokyo",
        country: "japan",
        zip: "232"
    },
    6: {
        name: "Damon",
        lastname: "Salvatore",
        addr1: "3rd block",
        addr2: "salvatore mansion",
        street: "salvatore estate",
        city: "mystic falls",
        landmark: "Behind walmart",
        phone: "908765321",
        email: "test@test.com",
        state: "New orleans",
        country: "America",
        zip: "222"
    }
};

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount("#app");