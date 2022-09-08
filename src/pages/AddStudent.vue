<template>
  <div>
    <NavBar/>
      <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">ADD STUDENT INFOMATION</p>
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
        <form @submit.prevent="submitCreate">
          <div class="mb-2">
            <input
              type="text"
              v-model="student.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
               v-model="student.fathername"
              class="form-control"
              placeholder="Father's Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="student.email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
             v-model="student.semester"
              class="form-control"
              placeholder="Semester"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.enrollment"
              class="form-control"
              placeholder="Enrollment Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.course"
              class="form-control"
              placeholder="Course"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
             v-model="student.branch"
              class="form-control"
              placeholder="Branch"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
             v-model="student.mobile"
              class="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="student.college"
              class="form-control"
              placeholder="College"
            />
          </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.subject01"
              class="form-control"
              placeholder="Subject 1"
            />
          </div>
          <div class="col-md-6 mb-2">
                        <input
              type="number"
              v-model="student.marks01"
              class="form-control"
              placeholder="Subject 1 Marks"
            />
            
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <input
              type="text"
              v-model="student.subject02"
              class="form-control"
              placeholder="Subject 2"
            />

          </div>
          <div class="col-md-6 mb-2">
             <input
              type="number"
               v-model="student.marks02"
              class="form-control"
              placeholder="Subject 2 marks"
            />
            
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
                        <input
              type="text"
              v-model="student.subject03"
              class="form-control"
              placeholder="Subject 3"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="number"
               v-model="student.marks03"
              class="form-control"
              placeholder="Subject 3 Marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
                     <input
              type="text"
              v-model="student.subject04"
              class="form-control"
              placeholder="Subject 4"
            />
          </div>
          <div class="col-md-6 mb-2">
           <input
              type="number"
               v-model="student.marks04"
              class="form-control"
              placeholder="Subject 4 marks"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
             <input
              type="text"
              v-model="student.subject05"
              class="form-control"
              placeholder="Subject 5"
            />
          </div>
          <div class="col-md-6 mb-2">
            <input
              type="number"
               v-model="student.marks05"
              class="form-control"
              placeholder="Subject 5 Marks"
            />
          </div>
        </div>
            <div class="mb-2 my-2">
              <input type="submit" class="btn btn-success" value="Create" />
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
name:'AddStudent',
components:{
  NavBar
},
data() {
    return {
      student: {
        name: "",
        fathername: "",
        email: "",
        semester: "",
        enrollment: "",
        course: "",
        branch: "",
        mobile: "",
        college: "",
        subject01: "",
        subject02: "",
        subject03: "",
        subject04: "",
        subject05: "",
        marks01: "",
        marks02: "",
        marks03: "",
        marks04: "",
        marks05: "",
      },
    };
  },

  methods : {
    submitCreate : async function(){
      try{
        let response = await StudentServices.addStudentInfo( this.student );
        console.log( response );
        if(response){
          this.$toast.success(response.data.message)
          return this.$router.push('/faculty')
         }
         else{
          this.$toast.error("Error in Creating students")
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

</style>