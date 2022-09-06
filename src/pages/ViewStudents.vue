<template>
  <div>
      <NavBar/>
 <div class="container mt-3">
     <div class="row">
       <div class="col">
        <p class="h3 text-success fw-bold">View Student Information</p>
         </div> 
      </div>   
    </div>

     <!-- spinner -->
  <div >
      <div class="container" v-if="loading">
          <div class="row">
              <div class="col">
                  <SpinnerRun/>
              </div>
          </div>

      </div>
  </div>

  <!-- error -->
<div >
      <div class="container mt-3">
          <div class="row">
              <div class="col">
                  <p class="h3 text-danger fw-bold"></p>
              </div>
          </div>

      </div>
</div>

    <div class="container">
        <div class="row align-item-center">
            
            <div class="col-md-6">
                <div class="list-group">
                    <ul class="list-group">
                            <li class="list-group-item">
                                : <span class="fw-bold">{{ student.students.name ? student.students.name : '' }}</span></li>
                            <li class="list-group-item">Fathre's Name: <span class="fw-bold">{{student.students.fathername}}</span></li>
                            <li class="list-group-item">Email: <span class="fw-bold">{{student.students.email}}</span></li>
                            <li class="list-group-item">Semester: <span class="fw-bold">{{student.students.semester}}</span></li>
                            <li class="list-group-item">Enrollment Number: <span class="fw-bold">{{student.students.enrollment}}</span></li>
                            <li class="list-group-item">Mobile: <span class="fw-bold">{{student.students.mobile}}</span></li>
                            <li class="list-group-item">College: <span class="fw-bold">{{student.students.college}}</span></li>
                            <br>
                    </ul>
                    <table class="table table-bordered">
                            <thead class="col-md-6">
                                <tr class="table-dark">

                                <th scope="col">Sr. No.</th>
                                <th scope="col">Subjects</th>
                                <th scope="col">Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td> {{student.students.subject01}}</td>
                                <td>{{student.students.marks01}}</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td> {{student.students.subject02}}</td>
                                <td>{{student.students.marks02}}</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td> {{student.students.subject03}}</td>
                                <td>{{student.students.marks03}}</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td> {{student.students.subject04}}</td>
                                <td>{{student.students.marks04}}</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td> {{student.students.subject05}}</td>
                                <td>{{student.students.marks05}}</td>
                                </tr>
                            </tbody>
                    </table>
                
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/faculty" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Back </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { StudentServices } from "../services/StudentServices";
import SpinnerRun from "../components/SpinnerRun.vue";
export default {
name: 'ViewStudents',
components: {NavBar,SpinnerRun},
data: function () {
    return {
      studentId : this.$route.params.studentId,
      loading:false,
      student: {},
    };
  },
  created : async function(){
       try {
            this.loading = true;
            let response = await StudentServices.studentview(this.studentId);
            this.student=response.data;
            this.loading =false;
       }catch (error){
           this.errorMassage = error;
           this.loading = false;
       }
   },
}
</script>

<style>

</style>