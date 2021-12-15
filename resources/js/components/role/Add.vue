<template lang="">
    <div class="container">
        <div class="col-md-12">
           <form @submit.prevent="create">
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" class="form-control" placeholder="" aria-describedby="helpId" v-model="role">
                  
                </div>
                
                                
                <div class="form-group" v-for="(per,key) in permissions" :key="key">
                  
                            <input type="checkbox"  v-model="per[key]" @change="checked(per.id)">{{per.name}}
                        
                    
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Create</button>
                  
                </div>
           </form>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'role-add',
    data(){
        return{
            
            role:'',
            permissions:[],
            d:[],   
        }
    },
    mounted(){
        this.getPermissions()
    },
    methods:{
        getPermissions(){
            this.axios.get('/api/permissions').then(response=>{
                this.permissions =response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        create(){
            this.axios.post('/api/role',[this.role,this.d]).then(response=>{
                
            }).catch(error=>{
                console.log(error)
            })
        },
        checked(id){
            this.d.push(id)
            
        }
       
    }
}
</script>
<style lang="">
    
</style>