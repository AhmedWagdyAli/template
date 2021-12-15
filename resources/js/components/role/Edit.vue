<template lang="">
    <div>
         <div class="container">
        <div class="col-md-12">
           <form @submit.prevent="create">
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" class="form-control" placeholder="" aria-describedby="helpId" v-model="role.name">
                  
                </div>
                
                    
                    
                    <div class="container" v-for="(mission,key,index) in activeUsers" :key="key">
                        <div class="col-md-3" v-if="check">
                            <input type="checkbox"  v-model="mission[key]">{{mission.name}} 
                        </div>
                        <div class="col-md-3" v-if="check">
                            <input type="checkbox"  v-model="mission[key]" checked>{{mission.name}} 
                        </div>
                        
                    </div>
                    
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">update</button>
                  
                </div>
           </form>
        </div>
        
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            role:'',
            permissions:[],
            selected:[],
            per:[],
        }
    },
    mounted(){
        this.showRole()
        this.getPermissions()
        
    },
    computed: {
    
        activeUsers: function () {
            
            return this.permissions.filter(function (mission) {
                return mission
            })
        },
        
    },
    methods:{
        showRole(){
           
            this.axios.get(`/api/role/${this.$route.params.id}`).then(response=>{
                const{role ,selected}= response.data
                this.role= role
                this.selected = selected
            }).catch(error=>{
                console.log(error)
            })
        },
        getPermissions(){
            this.axios.get('/api/permissions').then(response=>{
                this.permissions =response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        check(){
            this.permissions.map(function (mission) {
                this.selected.map(function(per){
                    if (mission.id == per.id) {
                        return true
                    }
                    else{
                        return false
                    }
                })
               
            })
        }
    }
}
</script>
<style lang="">
    
</style>