<template>
    <b-nav tabs justified>
        <b-nav-item :to="{name:'home',params:{type:'popular'}}" active-class="active" >
            Popular
        </b-nav-item>
        <b-nav-item :to="{name:'home',params:{type:'upcoming'}}" active-class="active">
            Upcoming
        </b-nav-item>
        <b-nav-item :to="{name:'home',params:{type: 'now_playing'}}" active-class="active">
            Playing now
        </b-nav-item>
    </b-nav>
</template>

<script>

export default {
    name: 'MenuButtons',
    data: function(){
        return {}
    }
}
</script>

<style scoped>
    .active{

    }

</style>