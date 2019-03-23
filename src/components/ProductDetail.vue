<template>
  <f7-page>
    <f7-navbar color-theme="red" back-link="Back">Ürün</f7-navbar>
    <f7-toolbar color-theme="green">
      <br>
      <f7-link fill style="background-color:red" @click="addToCart(urunler)">Sepete Ekle</f7-link>
      <br>
    </f7-toolbar>
    <f7-block>
      <f7-row>
        <f7-col>
          <img id="demo" v-bind:src="image(urunler.ImageFile.Source)">
        </f7-col>
      </f7-row>
      <f7-row>{{urundetay(urunler.ID)}}</f7-row>
      <hr>
      <f7-row>
        <h2>
          <b>{{urunler.Name}}</b>
        </h2>
      </f7-row>
      <f7-row>
        <f7-col>
          <h2 style="color:red">
            <b>₺{{urunler.Price}}</b>
          </h2>
          <h4>
            <del>₺{{urunler.OldPrice}}</del>
          </h4>
        </f7-col>
      </f7-row>
      <f7-row>
        Ürün Kodu:
        {{urunler.Barcode}}
      </f7-row>
      <f7-row>
        Stok:
        {{product.CurrentInventoryQuantity}}
      </f7-row>
    </f7-block>
    <hr>
    <f7-block>
      <f7-row>
        <h2>Açıklama</h2>
      </f7-row>
      <f7-row>{{product.Description}}</f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import store from "../store.js";
import axios from "../Services/App.js";

export default {
  name: "ProductDetail",
  components: {},
  props: ["id", "ID", "Name"],
  data() {
    return {
      productstree: [],
      urunler: store.selectedUrun,
      isBottom: true,
      product: []
    };
  },
  methods: {
    image: function(a) {
      String.prototype.insert = function(index, string) {
        var ind = index < 0 ? this.length + index : index;
        return (
          this.substring(0, ind) + string + this.substring(ind, this.length)
        );
      };

      var url = ".........." + "" + a;
      var thumb = url.insert(-4, "_small");

      return thumb;
    },
    urundetay: function(u) {
      axios.get("/Product/" + u).then(response => {
        this.product = response.data;
      });
    },
    addToCart(urunler) {
      this.$store.dispatch("addToCart", urunler);
    }
  }
};
</script>

<style>
</style>