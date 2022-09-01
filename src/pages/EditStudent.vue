<template>
  <div>
    <NavBar/>
       <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold text-center">Edit Contact</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus cum
            fugiat et eligendi alias? Quod similique ducimus illo sed ex animi
            suscipit eaque?
          </p>
        </div>
      </div>
    </div>
    <div class="container col-md-6">
      <div calss="row">
        <form @submit.prevent="updateSubmit">
          <div class="mb-2">
            <input
              type="text"
              v-model="student.students.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="student.students.fathername"
              class="form-control"
              placeholder="Father's Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="student.students.email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
             v-model="student.students.semester"
              class="form-control"
              placeholder="Semester"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.students.enrollment"
              class="form-control"
              placeholder="Enrollment Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
             v-model="student.students.mobile"
              class="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.students.college"
              class="form-control"
              placeholder="College"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.students.branch"
              class="form-control"
              placeholder="Branch"
            />
          </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.subject01"
              class="form-control"
              placeholder="Subject 1"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="number"
              v-model="student.students.marks01"
              class="form-control"
              placeholder="Subject 1 Marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.subject02"
              class="form-control"
              placeholder="Subject 2"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.marks02"
              class="form-control"
              placeholder="Subject 2 Marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.subject03"
              class="form-control"
              placeholder="Subject 3"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.marks03"
              class="form-control"
              placeholder="Subject 3 Marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.subject04"
              class="form-control"
              placeholder="Subject 4"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.marks04"
              class="form-control"
              placeholder="Subject 4 Marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.subject05"
              class="form-control"
              placeholder="Subject 5"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.students.marks05"
              class="form-control"
              placeholder="Subject 5 Marks"
            />
          </div>
        </div>
          <div class="mb-2 my-2">
            <input type="submit" class="btn btn-success" value="Update">
          </div>
        </form>
        
    </div>

  </div>
  
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import   {StudentServices}   from "../services/StudentServices";
export default {
name:'EditStudent',
components:{
  NavBar
},
data() {
    return {
      studentId : this.$route.params.studentId,
      loading:false,
      student : {}
    };
  },
      created: async function (){
    try {
      this.loading=true;
      let response = await StudentServices.studentview(this.studentId);
      this.student = response.data;
      this.loading=false;
    } catch (error) {
      this.loading=false;
    }
  },
  methods:{
    updateSubmit : async function(){
      try{
        let response = await StudentServices.updateStudent( this.student.students,this.studentId );
        if(response){
          this.$toast.success(response.data.message)
          // return this.$router.push(`/faculty`);
          console.log(response);
        }
      }catch( error ){
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>