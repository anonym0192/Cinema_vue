<template>   
    <section class="cast-section mt-5" v-if="cast">
        <h2 class="d-flex justify-content-between" >
            Cast 
            <b-form-checkbox switch size="lg" v-model="showAll">Show All</b-form-checkbox>
        </h2>

        <div :class="[{'show-all': showAll}, 'cast-area']">
            <div class="card" v-for=" actor in cast" :key="actor.id">
                <img v-if="actor.profile_path" class="w-100 card-img-top" :src="actor.profile_path" alt="Card image cap" />
                <div v-else class="avatar-placeholder">
                    <span>No Photo</span>
                </div>
                <div class="card-body">
                    <span>{{actor.name}}</span>
                    <span v-if="actor.character">as</span>
                    <span>{{actor.character}}</span>
                </div>
            </div>
        </div>
    </section>     
</template>

<script>
export default {

    name: 'CastArea',
    props: ['cast'],
    data: function(){
        return {
            showAll: false
        }
    }
}
</script>

<style scoped>

.cast-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-height: 370px;
    overflow: hidden;
    color: #f4f4f4;
    background-color: #020202db;
}

.card{
    background-color: transparent;
    width: 140px;
    height: 370px;
    border: 0;
    padding: 5px;
}

.avatar-placeholder{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #18171729;
    color: #f4f4f4;
    height: 210px;
}

.card-body{
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.card-body::-webkit-scrollbar{
    display: none;
}

.card-body span{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.show-all{
    max-height: none !important;
    overflow: auto !important;
}

@media screen and (max-width: 768px){
    .cast-area{
        max-height: calc(3 * 370px);
    }   
}

</style>