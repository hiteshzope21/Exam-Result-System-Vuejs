<template>
  <div>
    <div>
      <div class="container login bg-info">
        <h1 class="text-center text-white mt-3">Login</h1>
        <hr />
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
                  <span v-if="!$v.email.required"
                    >Email is required !</span
                  >
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
                <span v-if="!$v.password.required"
                  >Password is required !</span
                >
              </div>
          </div>

          <button type="submit" class="btn btn-primary m-3">Submit</button>
        </form>
        <hr />
        <p class="float-end">
          Do not have Account ?
          <router-link to="/facultysignup"> Signup </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { StudentServices } from "../services/StudentServices";
import { required, email} from "vuelidate/lib/validators";
export default {
name:'FacultyLogin',
data(){
    return{
        email:'',
        password:'',
      
    };
},
validations: {
      email : { 
        required,
        email,
      },
      password : { 
        required,
      },
  },
methods : {
    

    async onLogin(){
       const data  = {
            email : this.email,
            password : this.password
        }

        if (!this.email) {
            this.$toast.error("Email Not Provided !");
        }else  if (!this.email.includes('@')) {
            this.$toast.error("Email is not valid !");
        }
         else if (!this.password) {
            this.$toast.error("password not provided !");
        }
        console.log(data);

         const response = await StudentServices.facultyLogin(data);
         console.log( "Response : ", response.data );
          try{

          
          if (response.data.success) {

            localStorage.setItem('MESSAGE', response.data.message ),
            localStorage.setItem('TOKEN', response.data.Faculty.JWTtoken)

            // const token = localStorage.getItem('TOKEN');
            // const message = localStorage.getItem('MESSAGE');

            // console.log(token);
            // console.log(message);

            this.$toast.success("Login Successfully !");
            this.$router.push('/faculty');

          } else{
            console.log( response.data );
            this.$toast.error("Error in Login !");
          }
          }
          catch( error ){
            this.$toast.error("Login failed !")
            console.log( error );
          }
    }
    
}

}
</script>

<style scoped>
.login {
  width: 40%;
  height: 430px;
  margin-top: 50px;
}
label {
  font-size: 25px;
}
.inputField {
  height: 45px;
}
</style>