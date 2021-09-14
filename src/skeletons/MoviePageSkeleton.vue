<template>
        <section>
            <div class="box">
                <b-skeleton-img no-aspect class="col-md-5 col-12"/>
                <div class="right-area col-md-7 col-12">
                    <b-skeleton animation="wave" width="100%" class="mt-5 mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                    <b-skeleton animation="wave" width="100%" class="mb-4"></b-skeleton>
                </div>
            </div>
            <div class="bottom-box">
                <b-skeleton animation="wave" width="100%"></b-skeleton>
            </div>

            <h2 class="mt-5">Cast</h2>

            <div style="height: 370px; background-color: #020202db">
                <b-skeleton-img no-aspect/>
            </div>
        </section>   
        
</template>

<script>
export default {

    name: 'MoviePageSkeleton',
    data: function(){
        return {}
    },
}
</script>

<style scoped>

.b-skeleton-text {
    height: 1.4rem;
}

.b-skeleton-img{
    width: 100%;
    height: inherit;
}

.cast-area{
    height: 370px;
    background-color: #020202db;
}

.box{
    display: flex;
    background-color:#000000ab;
    height: 500px;
}

.right-area{
    padding: 25px 15px;
    max-height: inherit;
}

.bottom-box{
    padding: 20px 15px;
    background-color: #000;
}


@media screen and (max-width: 768px){

    .box .b-skeleton-img{
        height: 400px;
    }
    .box{
        display: block;
        height: auto;
    }
    .right-area{
        padding: 25px;
    }
}

</style>