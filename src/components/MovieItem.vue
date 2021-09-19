<template>
    <div class="col-sm-12 col-lg-4 col-md-6 mt-5" >
        <router-link :to="{ name: 'movie', params: { id:  movie.id}}" class="movie-link">
            <b-card :title="movie.title" :img-src="movie.poster_path" :img-alt="movie.title" img-top >
                <b-card-text>
                    {{movie.overview}}
                </b-card-text>
                <template #footer>
                    <small class="text-light">{{$t('release_date')}}: {{movie.release_date}}</small>
                </template>
            </b-card>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['movie']
}
</script>

<style scoped>

    .movie-link,
    .movie-link:hover,
    .movie-link:visited{
        color: var(--dark);
        text-decoration: none;
    }

    .card img{
        min-height: 460px;
        background-color: #191919;
    }
    .card-body{
        background-color: #000000e6;
        color: #ffffff9c;
    }
    .card-footer {
        background-color: #1e1e1e;
        padding: 0.75rem 1.25rem;
    }

    @media screen and (min-width: 768px){
        .card-body{
            height: 272px; 
            overflow: auto;
        }

    }
</style>