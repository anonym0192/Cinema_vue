<template>
    <b-pagination-nav
        :number-of-pages="movieList.total_pages"
        base-url="?page="
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        :value="movieList.page"
        use-router
    ></b-pagination-nav>
    
</template>

<script>
    export default {
        props: ['movieList']
    }
</script>

<style>

    .pagination-area{
        display: flex;
        justify-content: center;
        padding-top: 50px;
        overflow: auto;
    }

    .page-item .page-link{
        background-color: transparent !important;
        color: var(--white) !important;
        border: none;
    }

    .page-item.active .page-link{
        background-color: var(--indigo) !important;
    }

</style>