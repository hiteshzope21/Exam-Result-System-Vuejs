<template>
  <div>
    <div class="container signupPage bg-info my- col-md-6">
      <h1 class="text-center text-white">SIGNUP</h1>
      <hr />
      <div>
        <pre>
          {{ faculty }}
        </pre>
        <div class="row">
          <form @submit.prevent="handleSignup">
           
            <div class="form-group m-3">
              <label for="name">Name </label>
              <input
                v-model="faculty.name"
                type="text"
                class="form-control inputField"
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div></div>
            <div class="row m-1">
              <div class="col-md-6">
                <label for="email">Email address</label>
                <input
                  v-model="faculty.email"
                  type="email"
                  class="form-control inputField"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="col-md-6">
                <label for="college">College</label>
                <input
                  v-model="faculty.college"
                  type="text"
                  class="form-control inputField"
                  id="college"
                  aria-describedby="emailHelp"
                  placeholder="Enter college name"
                />
              </div>
            </div>

            <div class="form-group m-3">
              <label for="password">Password</label>
              <input
                v-model="faculty.password"
                type="password"
                class="form-control inputField"
                id="password"
                placeholder="Password"
              />
            </div>

            <div class="form-group m-3">
              <label for="confirm_password">Confirm Password </label>
              <input
                type="password"
                v-model="faculty.confirm_password"
                class="form-control inputField"
                id="confirm_password"
                aria-describedby="emailHelp"
                placeholder="Confirm your password "
              />
            </div>
            <button type="submit" class="btn btn-primary m-3">Submit</button>
          </form>
        </div>
      </div>
      <hr />
      <p class="float-end">
        Already have an Account ?
        <router-link to="/facultylogin"> Login </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import   {StudentServices}   from "../services/StudentServices";
export default {
  name: "FacultyRegistration",
  data() {
    return {
      faculty: {
        name: "",
        email: "",
        college: "",
        password: "",
        confirm_password : ""
      },
    };
  },
  methods : {
    handleSignup : async function(){
      try{
        let response = await StudentServices.facultySignup( this.faculty );
        console.log( response );
        if(response){
          this.$toast.success(response.data.message)
          return this.$router.push('/facultylogin')
         }
         else{
          this.$toast.error("Error in Creating signup")
          return false;
        }
      }catch( error ){
        console.log(error);
      }
    }
  }
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
  width: 50%;
  height: 640px;
}
</style>