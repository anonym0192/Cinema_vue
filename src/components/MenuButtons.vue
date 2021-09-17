<template>
    <b-nav tabs justified class="border-0">
        <b-nav-item :to="{name:'home',params:{type:'popular'}}" active-class="active" >
            {{$t('popular')}}
        </b-nav-item>
        <b-nav-item :to="{name:'home',params:{type:'upcoming'}}" active-class="active">
            {{$t('upcoming')}}
        </b-nav-item>
        <b-nav-item :to="{name:'home',params:{type: 'now_playing'}}" active-class="active">
            {{$t('playing_now')}}
        </b-nav-item>
    </b-nav>
</template>

<script>

export default {
    name: 'MenuButtons'
}
</script>

<style scoped>
    
    .active{
        color: #f8f9fa !important;
        background-color: var(--indigo) !important;
        border: none !important;
    }

    .nav-link{
        color: #e9ecef;
    }

</style>