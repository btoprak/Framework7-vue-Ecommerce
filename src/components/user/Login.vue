<template>
<f7-page :page-content="false">
  <f7-navbar color-theme="gray" sliding back-link="Back">
    <f7-subnavbar >
      <f7-segmented raised>
        <f7-button mouse: tab-link="#signin" tab-link-active>Giriş Yap</f7-button>
        <f7-button tab-link="#signup">Kayıt Ol</f7-button>
      </f7-segmented>
    </f7-subnavbar>
  </f7-navbar>
  <f7-tabs>
    <f7-tab id="signin" tab-active class="page-content">
      <f7-block>
 <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <hr>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
      </f7-block>
    </f7-tab>
    <f7-tab id="signup" class="page-content">
      <f7-block>
          <f7-list form>
        <f7-list-item>
          <f7-label>E-mail</f7-label>
          <f7-input name="Email" placeholder="E-mail" type="Email"></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-label>Password</f7-label>
          <f7-input name="Password" type="password" placeholder="Password"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-button  color="red" @click="signUp" login-screen-close>Kayıt Ol</f7-list-button>
        <f7-block-footer>
        </f7-block-footer>
      </f7-list>
      </f7-block>
    </f7-tab>
  </f7-tabs>
</f7-page>
</template>


<script>
import axios from "../../Services/App.js";

export default {
  data() {
    return {
        email: "",
        password: "",
      loginScreenOpened: false
    };
  },
  methods: {
    login() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
        axios
          .post("https://wikiapis.com/api/CRM/Customers/Login",{
            Email: this.email,
            Password: this.password
          })
          .then(response => {
          var data = response.data;
          console.log(data.Content.Tokens[0])
              if(data.Success==true){
                router.navigate('/');
              }
              else{
                router.navigate('/login/');
              }
          });
      },
    signUp() {}
  }
};
</script>
<style>
.login-wrapper {
  background: #fff;
  width: 100%;
  margin: 10% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin button[type="submit"] {
  background-color:lime;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>

