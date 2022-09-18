<template>
  <div>
    <div class="head  bg-success ">
    <h1 class="text-center p-2">Exam Result System</h1>
    

    </div>
    <div class="container text-center col-md-4 bg-primary mt-5 p-5 rounded">
   
    <form @submit.prevent="resultButton">
      <div class="view-result">
        <div >  
          <input type="text" class="form-control enroll-value col-md-9" v-model="enrollment" placeholder="enter enrollment number" />
          
        </div>
        <div>
          <button class="btn btn-danger my-3"><router-link :to="`/student/result/${enrollment}`" class="text-decoration-none text-light"> View Result </router-link> </button>
          
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
  <!-- </div> -->
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
         students : [],
         errorMassage: null
    }
  },
 
 
   methods : {
    resultButton : async function(){
      try{
        let response = await StudentServices.viewresult( this.enrollment );
        this.studentresult=response.data;
        console.log( response );
        if(response.status == 200){
          this.$toast.success(response.data.message);
         }
         else{
          this.$toast.error("Enrollment Not Found !");
        }
      }catch( error ){
        this.errorMassage=error;
      }
    }
  }
  
};
</script>

<style scoped>
.head {
  height: 80px;
  
}
</style>