<template>
  <div>
    <div class="showResult">
      <h1 class="text-center">{{studentresult.user.college}} </h1>
      <h6 class="text-center text-secondary">Students Results </h6>
      <div class="container">
        <table class="table table-secondary table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">{{studentresult.user.name}}</th>
              <th scope="col">Father's Name</th>
              <th scope="col">{{studentresult.user.fathername}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">Branch</th>
              <th scope="col">{{studentresult.user.email}}</th>
              <th scope="col">Course</th>
              <th scope="col">{{studentresult.user.course}}</th>
            </tr>
            <tr>
              <th scope="col">Enrollment Number</th>
              <th scope="col">{{studentresult.user.enrollment}}</th>
              <th scope="col">Semester</th>
              <th scope="col">{{studentresult.user.semester}}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <table class="table table-secondary table-hover">
          <thead>
            <tr class="table-dark">
              <th scope="col">Sr.No.</th>
              <th scope="col">Subjects</th>
              <th scope="col">Subject Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{{studentresult.user.subject01}}</td>
              <td>{{studentresult.user.marks01}}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{{studentresult.user.subject02}}</td>
              <td>{{studentresult.user.marks02}}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{{studentresult.user.subject03}}</td>
              <td>{{studentresult.user.marks03}}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>{{studentresult.user.subject04}}</td>
              <td>{{studentresult.user.marks04}}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>{{studentresult.user.subject05}}</td>
              <td>{{studentresult.user.marks05}}</td>
            </tr>
            <tr class="table-dark fw-bold text-light">
              <th></th>
              <td>Total</td>
              <td colspan="2" >{{studentresult.user.marks01 + studentresult.user.marks02 + studentresult.user.marks03+ studentresult.user.marks04 + studentresult.user.marks05}}</td>
         
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import   {StudentServices}   from "../services/StudentServices";
export default {
  name: "ViewResult",
  data(){
    return {
      enrollment : this.$route.params.enrollment,
      studentresult:{},
    }
  },
   created : async function(){
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
   },
  //  methods : {
  //   resultButton : async function(){
  //     try{
  //       let response = await StudentServices.viewresult( this.enrollment );
  //       this.studentresult=response.data;
  //       console.log( response );
  //       if(response.status == 200){
  //         this.$toast.success(response.data.message)
  //         // return this.$router.push('/student/result')
  //        }
  //        else{
  //         this.$toast.error("Enrollment Not Found !");
  //         // return false;
  //       }
  //     }catch( error ){
  //       console.log(error);
  //     }
  //   }
  // }
};
</script>

<style>
</style>