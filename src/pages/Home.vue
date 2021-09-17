<template>
    <main>
        <div class="container">

            <movie-list-skeleton v-if="loading" />

            <section v-else class="movies-list">
                <h1>{{$t('movie_list')}}</h1>
                <div class="row">
                    <movie-item v-for="movie in movieList.results" :key="movie.id" :movie="movie"  />
                </div>          
            </section>
            <div v-show="movieList.total_pages > 1" class="pagination-area">
                <pagination-area :movieList="movieList" />
            </div>
        </div>
    </main>
</template>

<script>

    import MovieItem from '../components/MovieItem';
    import MovieListSkeleton from '../skeletons/MovieListSkeleton';
    import PaginationArea from '../components/PaginationArea';
    import { mapState , mapActions } from 'vuex';

    export default {
        name: 'Home',
        methods:{
            ...mapActions('movieData',['getMovieList'])
        },
        components: {
            MovieItem, MovieListSkeleton, PaginationArea
        },
        computed: {
            ...mapState('movieData', ['movieList', 'loading', 'error', 'errorMsg'])
        },
        mounted: async function(){
            
            await this.getMovieList({
                    type: this.$route.params.type, 
                    page: this.$route.query.page
                });
            console.log(this.movieList);
        },

        watch: {
            async $route(){

                 this.getMovieList({
                    type: this.$route.params.type, 
                    page: this.$route.query.page
                });
                document.getElementById('search-field').value = "";
            }
        }
    }
</script>

<style scoped>
    main{
        padding: 50px 0;
        min-height: 90vh;
    }

    .col-sm-12{
        height: auto;
    }

</style>