<template>
  <f7-page>
    <img
      src="https://wikiapis.com/Images/636526754769218870_small.png"
      title="Your Store"
      alt="RasgeleBalikAv"
      style="max-width:200px;max-height:70px;"
    >
    <br>

    <f7-swiper pagination navigation scrollbar>
      <f7-swiper-slide v-for="urunler in productstree" :key="urunler.ID">
        <a href="/Product/:id">
          <img
            @click="selected(urunler)"
            v-bind:src="image(urunler.ImageFile.Source)"
            style="max-width:200px;max-height:200px;"
          >
        </a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
      <f7-swiper-slide>
        <a href="/Product/:id"></a>
      </f7-swiper-slide>
    </f7-swiper>
    <f7-block>
      <f7-swiper navigation :params="{speed:500, slidesPerView: 2, spaceBetween:25}">
        <f7-swiper-slide>
          <img
            src="https://www.resimistanbul.com/wp-content/uploads/2016/03/AYDOS-ORMAN.jpg"
            style="max-width:200px;max-height:200px;"
          >
          <br>
          <img
            src="https://wikiapis.com/Images/636651786873692645_small.jpg"
            style="max-width:200px;max-height:160px;"
          >
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            src="https://wikiapis.com/Images/636699416457601210_small.jpg"
            style="max-width:200px;max-height:140px;"
          >
          <br>
          <img
            src="https://wikiapis.com/Images/636548072716653496_small.jpg"
            style="max-width:200px;max-height:200px;"
          >
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            src="https://wikiapis.com/Images/636663830987405154_small.jpg"
            style="max-width:200px;max-height:200px;"
          >
          <br>
        </f7-swiper-slide>
        <f7-swiper-slide>Slide 4</f7-swiper-slide>
      </f7-swiper>
    </f7-block>
  </f7-page>
</template>
<script>
import CategoryList from "../components/Category";
import axios from "../Services/App.js";
import store from "../store.js";

export default {
  name: "Home",
  components: {
    CategoryList
  },
  data() {
    return {
      productstree: []
    };
  },
  methods: {
    selected: function(urunler) {
      store.selectedUrun = urunler;
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
  },
  created() {
    axios
      .post("/ProductsByCategory/" + (1320 + Math.floor(Math.random() * 7)), {
        Pagination: {
          PageSize: 50,
          Page: 1,
          OrderField: "Name",
          OrderByDesc: false
        },
        Filters: []
      })
      .then(response => {
        this.productstree = response.data.Products;
      });
  }
};
</script>
<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
