<template>
  <div>
    <div class="container signupPage bg-info my-3 col-md-6">
      <h1 class="text-center text-white">SIGNUP</h1>
      <hr />
      <div>
        <div class="row">
          <form @submit.prevent="handleSignup">
            <div class="form-group m-3">
              <label for="name">Name </label>
              <input
                v-model="$v.faculty.name.$model"
                type="text"
                class="form-control inputField"
                :class="{
                  'is-valid': !$v.faculty.name.$invalid,
                  'is-invalid': $v.faculty.name.$error,
                }"
                id="name"
                placeholder="Enter Name"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.faculty.name.required">Name is required !</span>
              </div>
            </div>
            <div></div>
            <div class="row m-1">
              <div class="col-md-6">
                <label for="email">Email address</label>
                <input
                  v-model="$v.faculty.email.$model"
                  type="email"
                  class="form-control inputField"
                  :class="{
                    'is-valid': !$v.faculty.email.$invalid,
                    'is-invalid': $v.faculty.email.$error,
                  }"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <div class="invalid-feedback">
                  <span v-if="!$v.faculty.email.required"
                    >Email is required !</span
                  >
                </div>
              </div>
              <div class="col-md-6">
                <label for="college">College</label>
                <input
                  v-model="$v.faculty.college.$model"
                  type="text"
                  class="form-control inputField"
                  :class="{
                    'is-valid': !$v.faculty.college.$invalid,
                    'is-invalid': $v.faculty.college.$error,
                  }"
                  id="college"
                  aria-describedby="emailHelp"
                  placeholder="Enter college name"
                />
                <div class="invalid-feedback">
                  <span v-if="!$v.faculty.college.required"
                    >College is required !</span
                  >
                </div>
              </div>
            </div>

            <div class="form-group m-3">
              <label for="password">Password</label>
              <input
                v-model="$v.faculty.password.$model"
                type="password"
                class="form-control inputField"
                id="password"
                :class="{
                  'is-valid': !$v.faculty.password.$invalid,
                  'is-invalid': $v.faculty.password.$error,
                }"
                placeholder="Password"
              />
              <div class="invalid-feedback">
                <span v-if="!$v.faculty.password.required"
                  >Password is required !</span
                >
              </div>
            </div>

            <div class="form-group m-3">
              <label for="confirm_password">Confirm Password </label>
              <input
                type="password"
                v-model="$v.faculty.confirm_Password.$model"
                class="form-control inputField"
                :class="{
                'is-invalid': $v.faculty.confirm_Password.$error,
                'is-valid': password != '' ? !$v.faculty.confirm_Password.$invalid : '',
              }"
                id="confirm_password"
                aria-describedby="emailHelp"
                placeholder="Confirm your password "
              />
                <div class="invalid-feedback">
              <span v-if=" !$v.faculty.confirm_Password.sameAsPassword">Password does not match </span>
            </div>
            </div>
            <button type="submit" class="btn btn-primary m-3">Submit</button>
          </form>
          <hr />
          <p class="text-end">
            Already have an Account ?
            <router-link to="/facultylogin"> Login </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StudentServices } from "../services/StudentServices";
import { required, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "FacultyRegistration",
  data() {
    return {
      faculty: {
        name: "",
        email: "",
        college: "",
        password: "",
        confirm_Password: "",
      },
    };
  },

  validations: {
    faculty: {
      name: {
        required,
      },
      college: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      confirm_Password: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    handleSignup: async function () {
      try {
        let response = await StudentServices.facultySignup(this.faculty);
        console.log(response);
        if (response) {
          this.$toast.success(response.data.message);
          return this.$router.push("/facultylogin");
        } else {
          this.$toast.error("Error in Creating signup");
          return false;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
label {
  font-size: 20px;
}
.inputField {
  height: 35px;
}

.signupPage {
  /* width: 50%;
  height: 555px; */
}
</style>