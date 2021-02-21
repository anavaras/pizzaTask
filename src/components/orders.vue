<template>
  <div>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Orders</v-card-title>

        <v-data-table
          :headers="headers"
          :items="$orders"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.customer`]="{ item }">

            <a :href="`/view/${item.orderId}`"> {{$customers[item.customer].lastname}}, {{ $customers[item.customer].name }}</a>
          </template>
          <template v-slot:[`item.total`]="{ item }">
            {{ $menu[item.itemID].price * item.qty | formatCurrency }}
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-select
              :items="Status"
              v-model="item.status"
              label="Update Order Status"
              autocomplete
              @change="addValue(item, Status[item.status])"
            ></v-select>
          </template>
        </v-data-table>

        <!-- <v-card-actions v-if="orders.length > 0">
          <v-btn small color="error" @click="removeAllTutorials">
            Remove All
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
    <!-- <orderDetails v-if="hii"></orderDetails> -->
  </div>
</template>

<script>
// import orderDetails from "./orderDetails.vue";
export default {
  name: "HelloWorld",
  props: {
    // orders: Array
  },
  data: () => ({
    Status: [
      "Order Received",
      "Preparing",
      "Ready to serve",
      "Order Placed",
      "Dispatched"
    ],
    headers: [
      { text: "Id", align: "start", sortable: false, value: "id" },
      { text: "Customer", value: "customer", sortable: false },
      { text: "Quantity", value: "qty", sortable: false },
      { text: "Total", value: "total", sortable: false },
      { text: "Status", value: "status", sortable: false }
    ],
    Menu: {

    }
  }),
  components: {
    // orderDetails
  },
  methods: {
    addValue(e, tar) {
      console.log("this", e, this.Status.indexOf(tar));
      // e.status = this.Status.indexOf(tar);
      // console.log("ordrs,", this.$orders)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
