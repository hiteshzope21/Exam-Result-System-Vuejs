<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link text-white mx-3" to="/"
              ><i class="fa fa-2x fa-home mx-2"> </i>Home
              <span class="sr-only">(current)</span></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <div class="container bg-info my-3 col-md-4">
        <h1 class="text-center text-white mt-3">Login</h1>
        <hr />
        <div class="row">
          <form @submit.prevent="onLogin">
            <div class="form-group m-3">
              <label for="email">Email address</label>
              <input
                v-model="$v.email.$model"
                type="email"
                class="form-control inputField"
                :class="{
                  'is-valid': !$v.email.$invalid,
                  'is-invalid': $v.email.$error,
                }"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.email.required">Email is required !</span>
              </div>
            </div>
            <div class="form-group m-3">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="$v.password.$model"
                class="form-control inputField"
                id="password"
                :class="{
                  'is-valid': !$v.password.$invalid,
                  'is-invalid': $v.password.$error,
                }"
                placeholder="Password"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">Password is required !</span>
              </div>
            </div>

            <button type="submit" class="btn btn-primary m-3">Submit</button>
          </form>
          <hr />
          <p class="text-end">
            Do not have Account ?
            <router-link to="/facultysignup"> Signup </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StudentServices } from "../services/StudentServices";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "FacultyLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    async onLogin() {
      const data = {
        email: this.email,
        password: this.password,
      };

      if (!this.email) {
        this.$toast.error("Email Not Provided !");
      } else if (!this.email.includes("@")) {
        this.$toast.error("Email is not valid !");
      } else if (!this.password) {
        this.$toast.error("password not provided !");
      }
      // console.log(data);

      const response = await StudentServices.facultyLogin(data);
      //  console.log( "ResponseBeforeTry : ", response.data );
      try {
        if (response.data.success) {
          localStorage.setItem("MESSAGE", response.data.message),
            localStorage.setItem("TOKEN", response.data.Faculty.JWTtoken);

          this.$toast.success("Login Successfully !");
          this.$router.push("/faculty");
        } else {
          // console.log( "ResponseInError", response.data );
          this.$toast.error("Error in Login !");
        }
      } catch (error) {
        this.$toast.error("Login failed !");
        console.log("ErrorLog : ", error);
      }
    },
  },
};
</script>

<style scoped>
label {
  font-size: 25px;
}
.inputField {
  height: 45px;
}
</style>