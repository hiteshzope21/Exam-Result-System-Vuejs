<template>
  <div>
     <div v-if="loading">
      <div class="container">
          <div class="row">
              <div class="col">
                  <SpinnerRun/>
              </div>
          </div>

      </div>
  </div>
    <!-- error -->
<div v-if="!loading && errorMassage">
      <div class="container mt-3">
          <div class="row">
              <div class="col">
                  <p class="h3 text-danger fw-bold">-Enrollment Not Found</p>
              </div>
          </div>

      </div>
  </div>
  <div v-if="Object.keys(studentresult).length>0">
    <div class="showResult" v-if="!loading">
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

              <td v-if="studentresult.user.marks01>33">{{studentresult.user.marks01}}</td>
              <td v-else class="text-danger">{{studentresult.user.marks01}} - Fail</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{{studentresult.user.subject02}}</td>

              <td  v-if="studentresult.user.marks02>33">{{studentresult.user.marks02}}</td>
              <td v-else class="text-danger">{{studentresult.user.marks01}} - Fail</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{{studentresult.user.subject03}}</td>
              <td v-if="studentresult.user.marks03>33">{{studentresult.user.marks03}}</td>
              <td v-else class="text-danger">{{studentresult.user.marks01}} - Fail</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>{{studentresult.user.subject04}}</td>
              <td v-if="studentresult.user.marks04>33">{{studentresult.user.marks04}}</td>
              <td v-else class="text-danger">{{studentresult.user.marks01}} - Fail</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>{{studentresult.user.subject05}}</td>
              <td v-if="studentresult.user.marks05>33">{{studentresult.user.marks05}}</td>
              <td v-else class="text-danger">{{studentresult.user.marks01}} - Fail</td>
            </tr>
            <tr class="table-dark fw-bold text-light">
              <th></th>
              <td>Total Marks</td>
              <td colspan="2" >{{studentresult.user.marks01 + studentresult.user.marks02 + studentresult.user.marks03+ studentresult.user.marks04 + studentresult.user.marks05}}</td>
            </tr>
            <tr class="table-dark fw-bold text-light">
              <th></th>
              <td>Percentage</td>
              <td colspan="2" >{{(studentresult.user.marks01 + studentresult.user.marks02 + studentresult.user.marks03+ studentresult.user.marks04 + studentresult.user.marks05)/5}}%</td>
            </tr>
            <tr class="table-dark fw-bold text-light">
              <th></th>
              <td>Overall Result</td>
              <td colspan="2" v-if="studentresult.user.marks01>33 || studentresult.user.marks02>33 || studentresult.user.marks03>33 || studentresult.user.marks04>33 || studentresult.user.marks05>33" class="text-success">

               PASS</td>
              <td v-else class="text-danger fw-bold">FAIL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import   {StudentServices}   from "../services/StudentServices";
import SpinnerRun from "../components/SpinnerRun.vue";
export default {
  name: "ViewResult",
  components:{
       SpinnerRun
  },
  data(){
    return {
      enrollment : this.$route.params.enrollment,
      studentresult:{},
      loading:false,
      errorMassage : null,
    }
  },
   created : async function(){
      try{
        this.loading=true;
        let response = await StudentServices.viewresult( this.enrollment );
        this.studentresult=response.data;
        this.loading=false;
      }catch( error ){
         this.errorMassage=error;
         this.loading=false;
      }
   },
};
</script>

<style>
</style>