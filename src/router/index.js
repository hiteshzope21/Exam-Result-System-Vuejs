import Router from 'vue-router';
import HomePage from '../components/HomePage';
import FacultyLogin from '../components/FacultyLogin';
import FacultyRegistration from '../components/FacultyRegistration';
import FacultyHome from '../pages/FacultyHome';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import ViewStudents from '../pages/ViewStudents';
import ViewResult from '../pages/ViewResult';

const router = new Router({
    mode: 'history',
    routes: [
        {
           name: 'HomePage',
           path: '/',
           component:HomePage 
       },
        {
           name: 'FacultyLogin',
           path: '/facultylogin',
           component: FacultyLogin
        },
        {
           name: 'FacultyRegistration',
           path: '/facultysignup',
           component: FacultyRegistration
        },
        {
           name: 'FacultyHome',
           path: '/faculty',
           component: FacultyHome
        },
        {
           name: 'AddStudent',
           path: '/student/add',
           component: AddStudent
        },
        {
           name: 'EditStudent',
           path: '/student/edit/:studentId',
           component: EditStudent
        },
        {
           name: 'ViewStudents',
           path: '/student/view/:studentId',
           component: ViewStudents
        },
        {
           name: 'ViewResult',
           path: '/student/result/:enrollment',
           component: ViewResult
        },  
    ]
});

export default router;