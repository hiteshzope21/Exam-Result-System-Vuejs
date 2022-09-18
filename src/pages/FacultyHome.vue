<template>
  <div>
    <NavBar />
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">
            Student Information
            <router-link to="/student/add" class="btn btn-success btn-sm"
              ><i class="fa fa-plus-circle"></i>New</router-link
            >
          </p>

          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <h4 class="">Student List</h4>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- spinner -->
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <SpinnerRun />
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-3">
      <div class="row">
        <div
          class="col-md-6"
          v-for="student of students.students"
          :key="student._id"
        >
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-item-centre">
                <div class="col-sm-10 my-3">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Name: <span class="fw-bold">{{ student.name }}</span>
                    </li>
                    <li class="list-group-item">
                      Email: <span class="fw-bold">{{ student.email }}</span>
                    </li>
                    <li class="list-group-item">
                      Semester:<span class="fw-bold">{{
                        student.semester
                      }}</span>
                    </li>
                    <li class="list-group-item">
                      Branch:<span class="fw-bold">{{ student.branch }}</span>
                    </li>
                    <li class="list-group-item">
                      Enrollment Number:<span class="fw-bold">{{
                        student.enrollment
                      }}</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="
                    col-sm-2
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                >
                  <router-link
                    :to="`/student/view/${student._id}`"
                    class="btn btn-warning my-1"
                  >
                    <i class="fa fa-eye"></i
                  ></router-link>
                  <router-link
                    :to="`/student/edit/${student._id}`"
                    class="btn btn-primary my-1"
                  >
                    <i class="fa fa-pen"></i
                  ></router-link>
                  <button
                    class="btn btn-danger my-1"
                    @click="clickDeletestudent(student._id)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { StudentServices } from "../services/StudentServices";
import SpinnerRun from "../components/SpinnerRun.vue";
export default {
  name: "FacultyHome",
  components: {
    NavBar,
    SpinnerRun,
  },
  data: function () {
    return {
      loading: false,
      students: [],
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await StudentServices.getAllStudentinformation();
      this.students = response.data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  },
  methods: {
    clickDeletestudent: async function (studentId) {
      try {
        this.loading = true;
        let response = await StudentServices.deleteStudentinfomation(studentId);

        if (response) {
          let response = await StudentServices.getALLStudentinfomation(); //getting fresh data
          this.students = response.data;
          this.loading = false;
          this.$toast.success("student record deleted successfully");
        }
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
</style>