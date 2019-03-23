<template>
  <!-- App -->
  <f7-app :params="f7params">
    <f7-navbar sliding color-theme="red">
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo">
          <f7-icon material="search"></f7-icon>
        </f7-link>
        <ShoppingCart/>
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-demo"
        expandable
        search-container=".search-list"
        search-in=".item-title"
      ></f7-searchbar>
    </f7-navbar>
    <f7-statusbar></f7-statusbar>
    <left-panel-view/>
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>
<script>
// Import Routes...
import routes from "./routes.js";
import LeftPanel from "./components/LeftPanel";
import ShoppingCart from "./components/ShoppingCart";

let theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}

export default {
  components: {
    "left-panel-view": LeftPanel,
    ShoppingCart
  },
  data() {
    return {
      f7params: {
        theme,
        routes,
        id: "io.framework7.testapp"
      }
    };
  }
};
</script>