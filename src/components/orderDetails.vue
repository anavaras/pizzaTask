<template>
   <div>
     <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>
          <span md="8" class="col-md-10">Customers</span>
          <span md="2" class="col-md-2 float-right rtl">
            <a :href="`/`">
              <v-btn depressed color="success">
                back
              </v-btn>
            </a>
          </span>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              Name : {{ customerDetails.lastname }} {{ customerDetails.name }}
            </v-col>
            <v-col cols="12" md="4">
              Total : {{ total | formatCurrency }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="2">
              Delivery Address :
            </v-col>

            <v-col cols="12" md="6">
              {{ customerDetails.addr1 }}
              <template v-if="customerDetails.addr2 != ''">
                {{ customerDetails.addr2 }}
              </template>, <br />
              {{ customerDetails.landmark }},<br />
              {{ customerDetails.city }},<br />
              {{ customerDetails.state }},<br />
              {{ customerDetails.country }} - {{ customerDetails.zip }},<br />
              ( {{ customerDetails.phone }} )<br />
              {{ customerDetails.email }}<br />
            </v-col>
          </v-row>
        <v-row> <h2>Items</h2></v-row>
        <v-data-table
          :headers="headers"
          :items="orderItems"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.total`]="{ item }">
            {{ $menu[item.itemID].price * item.qty | formatCurrency }}
          </template>
         <template v-slot:[`item.itemID`]="{ item }">
            {{ $menu[item.itemID].name }}
          </template>
        </v-data-table>
      </v-container>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    customer: 0,
    order: 0,
    total: 0,
    headers: [
      { text: "Name", value: "itemID", sortable: false },
      { text: "Quantity", value: "qty", sortable: false },
      { text: "Total", value: "total", sortable: false },
      { text: "Status", value: "status", sortable: false }
    ]
  }),
  created: function() {
    this.order = parseInt(this.$route.params.id);
    this.orderItems = this.$orders.filter(ord => ord.orderId == this.order);
    for (var i = 0; i < this.orderItems.length; i++) {
      this.total += this.orderItems[i].qty * this.$menu[this.orderItems[i].itemID].price;
    }
    this.customer = this.orderItems[0].customer;
    this.customerDetails = this.$customers[this.customer];
  }
};
</script>
