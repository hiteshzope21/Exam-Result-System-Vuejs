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
              type="email"
              class="form-control inputField"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group m-3">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control inputField"
              id="password"
              placeholder="Password"
            />
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
// import {mapActions, mapGetters} from 'vuex'
import { StudentServices } from "../services/StudentServices";
export default {
name:'FacultyLogin',
data(){
    return{
        email:'',
        password:'',
      
    };
},
computed : {
    
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

            const token = localStorage.getItem('TOKEN');
            const message = localStorage.getItem('MESSAGE');

            console.log(token);
            console.log(message);

            this.$toast.success("Successfully Registered !");
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