<template>
  <v-app>
    <v-main>
      <router-view />

      <!-- <orders :orders="orders" /> -->
    </v-main>
  </v-app>
</template>

<script>
// import orders from "./components/orders";

export default {
  name: "App",
  // data: function() {
  //   return {

  // },
  data: () => ({
    name: "today Order",
    orders: [
      {
        id: 1,
        customer: "sara",
        qty: 11,
        status: "Order Received",
        itemID: 1
      },
      {
        id: 2,
        customer: "kakashi",
        qty: 3,
        status: "Ready to serve",
        itemID: 3
      },
      {
        id: 3,
        customer: "luffy",
        qty: 3,
        status: "Order Received",
        itemID: 2
      },
      {
        id: 4,
        customer: "itachi",
        qty: 1,
        status: "Ready to serve",
        itemID: 4
      },
      {
        id: 5,
        customer: "buttowski",
        qty: 4,
        status: "Ready to serve",
        itemID: 2
      },
      {
        id: 6,
        customer: "gunther",
        qty: 3,
        status: "Preparing",
        itemID: 3
      }
    ]
  }),
  components: {
    // orders
  }
};
</script>
