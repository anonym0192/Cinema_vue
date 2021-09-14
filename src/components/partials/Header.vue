<template>      
    <b-navbar tag="header" toggleable="lg" type="dark" variant="info">
        <div class="container">
            <b-navbar-brand href="/">Movies</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">PT</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
  </b-navbar>
    
</template>

<script>
export default {
    
}
</script>

<style>


</style>