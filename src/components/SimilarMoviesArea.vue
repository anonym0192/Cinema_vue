<template>
    <section class="similar-section mt-5" v-if="movies">
        <h2 class="section-title">{{$t('similar_movies')}}</h2>
        <div class="row">    
            <movie-item :movie="movie"  v-for="movie in movies" :key="movie.id"/>
        </div>
    </section>
    
</template>

<script>

    import MovieItem from '../components/MovieItem';
    export default {

        name: 'SimilarMoviesArea',
        props: ['movies'],
        components:{MovieItem},
    }
</script>

<style>

#loadmore-btn{
    width: 75%;
    box-shadow:1px 2px 5px #000000df;
}

@media screen and (max-width: 768px){
    
    #loadmore-btn{
        width: 100%;
    }
}

</style>