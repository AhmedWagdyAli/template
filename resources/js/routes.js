const Welcome = ()=>import('./components/Welcome.vue')
const UserLogin = ()=>import('./components/userAuth/Login.vue')
const UserReg = ()=>import('./components/userAuth/Reg.vue')
const UserPasswordRest = ()=>import('./components/userAuth/ForgotPassword.vue')
const UserProfile = ()=>import('./components/user/Profile.vue')
const UserDashboard = ()=>import('./components/user/Dashboard.vue')
const AdminLogin = ()=>import('./components/adminAuth/Login.vue')
const AdminPasswordReset = ()=>import('./components/adminAuth/ForgotPassword.vue')
const AdminNewPassword = ()=>import('./components/adminAuth/NewPassword.vue')
const AdminCreate = ()=>import('./components/admin/Add.vue')
const AdminDashboard = ()=>import('./components/admin/Dashboard.vue')
const RoleCreate = ()=>import('./components/role/Add.vue')
const RoleEdit = ()=>import('./components/role/Edit.vue')
const AdminUserList = ()=>import('./components/admin/user/List.vue')
const AdminUserEdit = ()=>import('./components/admin/user/Edit.vue')
const AdminUserShow = ()=>import('./components/admin/user/Show.vue')
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'user-login',
        path: '/login',
        component: UserLogin
    },
    {
        name: 'user-restPassword',
        path: '/password-reset',
        component: UserPasswordRest
    },
    {
        name: 'user-dashboard',
        path: '/dashboard',
        component: UserDashboard
    },
    {
        name: 'user-reg',
        path: '/reg',
        component: UserReg
    },
    {
        name: 'user-profile',
        path: '/profile',
        component: UserProfile
    },
    {
        name: 'admin-login',
        path: '/admin/login',
        component: AdminLogin
    },
    {
        name: 'admin-forgotPassword',
        path: '/admin/password-reset',
        component: AdminPasswordReset
    },
   
    {
        name: 'admin-create',
        path: '/admin/create',
        component: AdminCreate
    },
    {
        name: 'admin-dashboard',
        path: '/admin/',
        component: AdminDashboard
    },
    {
        name: 'role-add',
        path: '/admin/role',
        component: RoleCreate
    },
    {
        name: 'role-edit',
        path: '/admin/role/:id',
        component: RoleEdit
    },
    {
        name: 'admin-userList',
        path: '/admin/user',
        component: AdminUserList
    },
    {
        name: 'admin-editUser',
        path: '/admin/user/:id/edit',
        component: AdminUserEdit
    },
    {
        name: 'admin-showUser',
        path: '/admin/user/:id',
        component: AdminUserShow
    },
   
]