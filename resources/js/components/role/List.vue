<template lang="">
    <div>
        <table class="table table-striped">
            <thead class="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Options</th>
                    
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(role,key) in roles" :key="key">
                        
                        <td>{{role.name}}</td>
                        <td><router-link :to='{name:"role-edit", params:{id:role.id}}' class="btn btn-success">Edit</router-link></td>
                    </tr>
                   
                </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            role:"",
        }
    },
    methods:{
       
    }
}
</script>
<style lang="">
    
</style>