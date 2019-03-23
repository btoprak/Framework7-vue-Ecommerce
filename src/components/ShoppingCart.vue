<template>
  <div>
    <f7-button raised popup-open=".demo-popup" data-toggle="modal" data-target="#shoppingCart">
      <f7-icon material="shopping_cart"></f7-icon>
      ({{ numInCart }})
    </f7-button>

    <f7-popup class="demo-popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-navbar color-theme="red" title="Sepetim">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-toolbar color-theme="green" :bottom-md="isBottom"><br><f7-button>Satın Al</f7-button><br></f7-toolbar>
      <f7-list>
        <f7-list-item v-for="(sepet, index) in inCart" :key="index">
          <f7-row>
            <img id="demo" style="width:111px" v-bind:src="image(sepet.ImageFile.Source)">
          </f7-row>
          <f7-col>{{sepet.Name}}</f7-col>
          <f7-col style="color:red">₺{{sepet.Price}}</f7-col>
          <f7-col>
            <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
          </f7-col>
        </f7-list-item>
      </f7-list>
      <f7-list></f7-list>
    </f7-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupOpened: false,
      isBottom: true,
    };
  },
  name: "shoppingCart",
  props: ["id", "Name"],
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.forSale.find(forSaleItem => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    },
    image: function(a) {
      String.prototype.insert = function(index, string) {
        var ind = index < 0 ? this.length + index : index;
        return (
          this.substring(0, ind) + string + this.substring(ind, this.length)
        );
      };

      var url = "............" + "" + a;
      var thumb = url.insert(-4, "_small");

      return thumb;
    }
  }
};
</script>
