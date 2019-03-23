<template>
  <f7-page>
    <f7-navbar color-theme="red" sliding back-link="Back" back-link-url="/" :dynamic-navbar="false">
      <f7-nav-left></f7-nav-left>
      <f7-nav-title>{{header}}</f7-nav-title>
    </f7-navbar>
    <f7-block>
      <f7-list>
        <f7-list-item
          v-if="isCategory == true"
          style="font-weight: bold"
          :link="'/Category/'+kategori.ID"
          v-for="kategori in categorytree"
          :title="kategori.Name"
          :key="kategori.ID"
        ></f7-list-item>
        <f7-list-item v-else @click="selected(kategori)" link="/Product/:id">
          <div class="media">
            <img
              v-bind:src="image(kategori.ImageFile.Source)"
              slot="media"
              id="demo"
              style="max-width:100px;max-height:100px;
              "
            >
          </div>
          <div class="main">
            <p style="font-size:70%;">
              <b>{{kategori.Name}}</b>
            </p>
            <p style="font-size:70%;">
              <b style="color:red">₺{{kategori.Price}}</b>
              <br>
              <del>₺{{kategori.OldPrice}}</del>
            </p>
          </div>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
import axios from "../Services/App.js";
import store from "../store.js";

export default {
  name: "CategoryList",
  props: ["id", "SubCategories"],
  data() {
    return {
      productstree: [],
      previousCategory: [],
      categorytree: [],
      header: "",
      isCategory: true
    };
  },
  created() {
    if (this.id == 0) {
      axios.get("/CategoryTree").then(response => {
        this.categorytree = response.data;
        this.isCategory = true;
        this.header = "Kategoriler";
        console.log(response);
      });
    } else {
      axios.post("/Category/" + this.id).then(response => {
        var superdata = response.data;
        var data = response.data.SubCategories;
        if (data.length > 0) {
          this.categorytree = data;
          this.header = superdata.Name;
          this.isCategory = true;
        } else {
          axios
            .post("/ProductsByCategory/" + this.id, {
              Pagination: {
                PageSize: 50,
                Page: 1,
                OrderField: "Name",
                OrderByDesc: false
              },
              Filters: []
            })
            .then(response => {
              this.categorytree = response.data.Products;
              this.header = superdata.Name;
              this.isCategory = false;
            });
        }
      });
    }
  },
  methods: {
    selected: function(kategori) {
      store.selectedUrun = kategori;
    },
    image: function(a) {
      String.prototype.insert = function(index, string) {
        var ind = index < 0 ? this.length + index : index;
        return (
          this.substring(0, ind) + string + this.substring(ind, this.length)
        );
      };

      var url = "........" + "" + a;
      var thumb = url.insert(-4, "_small");

      return thumb;
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}
.media {
  float: left; /* The width is 20%, by default */
}
.main {
  float: left;
  width: 70%; /* The width is 60%, by default */
}
/* Use a media query to add a break point at 800px: */
@media screen and (max-width: 100px) {
  .left,
  .main {
    width: 50%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>

