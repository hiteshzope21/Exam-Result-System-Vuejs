<template>
  <div>
    <div class="head  bg-success ">
    <h1 class="text-center p-2">Exam Result System</h1>
    

    </div>
    <div class="container text-center">
    <form @submit.prevent="resultButton">
      <div class="view-result">
        <div >  
          <input type="text" class="form-control enroll-value col-md-9" v-model="enrollment" placeholder="enter enrollment number" />
          <input type="submit" class="ml-5 btn btn-primary mb-3 col-md-3" value="Submit" />
        </div>
        <div>
          <button class="btn btn-danger"><router-link :to="`/student/result/${enrollment}`" class="text-decoration-none text-light"> View Result </router-link> </button>
          <!-- <ViewResult :studentresult= 'studentresult' /> -->
        </div>

      </div>
    </form>
      <div class="register">
        <router-link to="/facultysignup" class="link-plain text-decoration-none m-2 text-white">
          faculty-signup
        </router-link>
        <router-link to="/facultylogin" class="link-plain text-decoration-none m-2 text-white">
          faculty-login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import   {StudentServices}   from "../services/StudentServices";
export default {
  name: "HomePage",
  data(){
    return{
         enroll : this.$route.params.enrollment,
         enrollment:"",
         studentresult:{},
         students : []
    }
  },
 
 
   methods : {
    resultButton : async function(){
      try{
        let response = await StudentServices.viewresult( this.enrollment );
        this.studentresult=response.data;
        console.log( response );
        if(response.status == 200){
          this.$toast.success(response.data.message)
          // return this.$router.push('/student/result')
         }
         else{
          this.$toast.error("Enrollment Not Found !");
          // return false;
        }
      }catch( error ){
        console.log(error);
      }
    }
  }
  
};
</script>

<style scoped>
.head {
  height: 80px;
  
}
.enroll-value {
  margin: 30px auto;
}
.container {
  height: 300px;
  margin-top: 100px;
  width: 30%;
  background:rgb(99, 177, 187);
  padding : 20px;
}
hr {
  width: 80%;
  height: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: hsl(200, 59%, 58%);
  border: 0 none;
}
</style>