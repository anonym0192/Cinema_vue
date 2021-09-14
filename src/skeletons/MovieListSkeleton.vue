<template>
    <div class="row">
        <div class="col-sm-12 col-lg-4 col-md-6" v-for="num in arr" :key="num">
            <b-card no-body img-top class="mt-5">
                <b-skeleton-img card-img="top" variant="dark"></b-skeleton-img>
                <b-card-body>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                </b-card-body>
                <b-card-footer>
                    <b-skeleton animation="wave" width="100%"></b-skeleton>
                </b-card-footer>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {

    name: 'MovieListSkeleton',
    data: function(){
        return {
            arr: Array.from(Array(6).keys())
        }
    },
}
</script>

<style scoped>

.b-skeleton-img {
    height: 430px !important;
    width: 100%;
}

.card{
    min-height: 700px;
}
.card-body{
    background-color: #000000e6;
    color: #ffffff9c;
}
.card-footer {
     padding: 0.75rem 1.25rem;
     background-color: #1e1e1e;
}

@media screen and (min-width: 768px){
    .card-body{
        height: 272px; 
        overflow: auto;
    }

    .card-footer {
       
    }
}

</style>