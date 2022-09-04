import axios from "axios";
export class StudentServices{
    static serverURL='http://localhost:4444/resultsystem/api';

    static getALLStudents(student){
        let dataURL=`${this.serverURL}/students/add/`;
        return axios.post(dataURL,student);
    }
    static getALLStudentinfomation(){
        let dataURL=`${this.serverURL}/students`;
        return axios.get(dataURL);
    }
    static studentview(studentId){
        let dataURL=`${this.serverURL}/students/${studentId}`;
        return axios.get(dataURL);
    }
    static updateStudent(student,studentId){
        let dataURL=`${this.serverURL}/students/${studentId}`;
        return axios.put(dataURL,student);
    }
    static deleteStudentinfomation(studentid){
        let dataURL=`${this.serverURL}/students/${studentid}`;
        return axios.delete(dataURL);
    }

    static facultySignup(faculty){
        let dataURL=`${this.serverURL}/auth/signup`;
        return axios.post(dataURL,faculty);
    }
    static facultyLogin(faculty){
        let dataURL=`${this.serverURL}/auth/signin`;
        return axios.post(dataURL,faculty);
    }
}