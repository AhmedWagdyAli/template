<template lang="">
    <div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            admins:[]
        }
    },
    mounted(){
        this.axios.get('/api/admin/dashboard').then(response=>{
            this.admins = response.data
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style lang="">
    
</style>