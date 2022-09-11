import axios from "axios";
export class StudentServices {
  // static serverURL='http://localhost:4444/resultsystem/api'; // Localhost
  // static serverURL =
    "https://exam-result-system-backend.herokuapp.com/resultsystem/api"; // Production

  // POST -  Add a Student Information
  static addStudentInfo(student) {
    let dataURL = `${this.serverURL}/students/add/`;
    return axios.post(dataURL, student ,  {
      headers: {
        accesstoken: localStorage.getItem("TOKEN"),
      },
    } );
  }

  // GET - Get the Student Record
  static getALLStudentinfomation() {
    let dataURL = `${this.serverURL}/students`;
    return axios.get(dataURL, {
      headers: {
        AccessToken: localStorage.getItem("TOKEN"),
      },
    });
  }

  // GET - Student Details by ID
  static studentview(studentId) {
    let dataURL = `${this.serverURL}/students/${studentId}`;
    return axios.get(dataURL, {
      headers: {
        AccessToken: localStorage.getItem("TOKEN"),
      },
    });
  }

  //PUT - Update the Student Record
  static updateStudent(student, studentId) {
    let dataURL = `${this.serverURL}/students/${studentId}`;
    return axios.put(dataURL, student , {
        headers: {
          AccessToken: localStorage.getItem("TOKEN"),
        },
      });
  }

  // DELETE - Delete the student Record
  static deleteStudentinfomation(studentid) {
    let dataURL = `${this.serverURL}/students/${studentid}`;
    return axios.delete(dataURL , {
        headers: {
          AccessToken: localStorage.getItem("TOKEN"),
        },
      });
  }

  /** -------- API's without AccessToken --------- */

  // POST - Faculty can create Account
  static facultySignup(faculty) {
    let dataURL = `${this.serverURL}/auth/signup`;
    return axios.post(dataURL, faculty);
  }

  // POST -  Faculty Login
  static facultyLogin(faculty) {
    let dataURL = `${this.serverURL}/auth/signin`;
    return axios.post(dataURL, faculty);
  }

  // GET - Student Result
  static viewresult(enrollment) {
    let dataURL = `${this.serverURL}/students/results/${enrollment}`;
    return axios.get(dataURL);
  }
}
