<template>
    <main>
        <div class="container">
            <movie-page-skeleton v-if="loading"/>
            <template v-else>
                <movie-info-area :movie="selectedMovie.data"/>
                <cast-area :cast="selectedMovie.cast"/>
                <gallery-area :images="selectedMovie.images" />  
                <similar-movies-area :movies="selectedMovie.similar_movies" />
            </template>
        </div>
    </main>
</template>

<script>
 
    import MovieInfoArea from '../components/MovieInfoArea';
    import GalleryArea from '../components/GalleryArea';
    import CastArea from '../components/CastArea';
    import SimilarMoviesArea from '../components/SimilarMoviesArea';
    import MoviePageSkeleton from '../skeletons/MoviePageSkeleton';
    import { mapState , mapActions } from 'vuex';

    export default {
        name: 'Movie',
        data: function(){
            return {
            
            }
        },
        components: {
            MovieInfoArea, GalleryArea, CastArea, SimilarMoviesArea, MoviePageSkeleton
        },
        computed: {
             ...mapState('movieData',['selectedMovie', 'movieListData', 'loading'])
        },
        methods: {
            movieExists(){
                return this.selectedMovie.data ? true : false; 
            },
            async getMovieData(){
                window.scrollTo(0,0);
                await this.getMovieById(this.$route.params.id);
                !this.movieExists() ? this.$router.push({name: 'home'}) : '';
            },
            ...mapActions('movieData',['getMovieById', 'getMovieListData'])
        },
        
        mounted: async function(){
            this.getMovieData();
        },
        watch: {
            async $route(){
                this.getMovieData();
            }
        }
    }
    
</script>

<style scoped>
    


</style>