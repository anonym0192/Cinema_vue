<template>      
    <b-navbar tag="header" toggleable="lg" type="dark" style="background-color: var(--indigo)">
        <div class="container">
            <b-navbar-brand href="/"><img class="logo" src='/logo.png' alt="Logo"></b-navbar-brand>
            <!-- Right aligned nav items -->
            <b-nav class="ml-auto">
                <b-nav-item-dropdown :text="$t('lang')" right>
                    <b-dropdown-item href="#" @click="changeLanguage($event)">en</b-dropdown-item>
                    <b-dropdown-item href="#" @click="changeLanguage($event)">es</b-dropdown-item>
                    <b-dropdown-item href="#" @click="changeLanguage($event)">pt-BR</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
        </div>
  </b-navbar>
    
</template>

<script>

export default {

    methods: {
        changeLanguage(e){
            const lang = e.target.outerText;
            localStorage.setItem('lang', lang);
            window.location.reload();
        }
    }
}
</script>

<style>
.logo{
    width: 100px;
    margin: 0 10px;
}

.nav-link,
.nav-link:hover {
    color: #e9ecef;
}

</style>