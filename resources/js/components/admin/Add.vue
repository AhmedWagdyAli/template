<template lang="">
    <div class="container">
        <div class="col-md-12">
            <form @submit.prevent="create">
                <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" placeholder="" aria-describedby="helpId" v-model="admin.name">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="" aria-describedby="helpId" v-model="admin.email">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                <label for="">Password</label>
                <input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" v-model="admin.password">
                <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            admin:{
                name:'',
                email:'',
                password:'',
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post("/api/admin/create",this.admin).then(response=>{
                this.$router.push({name:'adminList'})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
<style lang="">
    
</style>