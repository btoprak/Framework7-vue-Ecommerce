<template>
  <f7-panel  left :reveal="isiOS" :effect="panelEffect">
    <f7-navbar   color-theme="red" title="Menu"></f7-navbar>
    <!-- force page background color to white if on iOS -->
    <f7-page  :style="pageStyle">
      <f7-block>
        <f7-row>
          <f7-col>
        <f7-icon f7="person" size="40px"></f7-icon><strong>Hesabım</strong>
        </f7-col> 
        <f7-col>
          <f7-button 
          fill color="green"
          href="/login/"
          panel-close
          ><f7-icon size="20px" f7="login"></f7-icon>Giriş Yap</f7-button>
        </f7-col>
        </f7-row>
      </f7-block>
      <f7-block-title></f7-block-title>
      <f7-list>
         <f7-list-item
          link="/"
          title="Home"
          link-view="#main-view"
          panel-close
          reload-all>
         </f7-list-item>
        <f7-list-item 
        link="/Category/0" 
        title="Kategoriler"
        link-view="main-view"
        panel-close
        reload-all>
        </f7-list-item>
        <f7-list-item
          link="/about/"
          title="About"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/services/"
          title="Services"
          link-view="#main-view"
          panel-close
          reload-all
        />
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>

import CategoryList from "./Category"

export default {
  name: 'LeftPanel',
  components:{
    CategoryList
  },
  data() {
    return {
      isMaterial: window.isMaterial,
      isiOS: window.isiOS
    };
  },
  computed: {
    pageStyle() {
      return this.isiOS ? 'background-color: white;' : '';
    },
    panelEffect() {
      return this.isiOS ? 'reveal' : 'cover';
    }
  }
};
</script>

<style scoped>
.panel-left .page {
  margin-top: 44px;
  padding-bottom: 44px;
}
@media (min-width: 960px) {
  .panel.panel-left {
    border-right: 1px solid #b2b2b2;
  }
}
</style>
