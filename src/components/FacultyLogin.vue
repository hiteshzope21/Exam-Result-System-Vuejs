<template>
  <div>
    <div>
        <pre>{{ email }} {{ password }}</pre>
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
import {mapActions, mapGetters} from 'vuex'
export default {
name:'FacultyLogin',
data(){
    return{
        email:'',
        password:''
    };
},
computed : {
    ...mapGetters(['getMessage'])
},
methods : {
    ...mapActions(['login']),

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

        const response = await this.login(data);
        console.log("Login-Response : ", response);

        if( response ){
            this.$toast.success(this.getMessage);
              this.$router.push("/faculty");
        }else{
            this.$toast.error("Error Occured !");
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