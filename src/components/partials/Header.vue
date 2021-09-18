<template>      
    <b-navbar tag="header" toggleable="lg" type="dark" style="background-color: var(--indigo)">
        <div class="container">
            <b-navbar-brand href="/"><img class="logo" src='/logo.png' alt="Logo"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown :text="$t('lang')" right>
                        <b-dropdown-item href="#" @click="changeLanguage($event)">EN</b-dropdown-item>
                        <b-dropdown-item href="#" @click="changeLanguage($event)">ES</b-dropdown-item>
                        <b-dropdown-item href="#" @click="changeLanguage($event)">PT</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </div>
  </b-navbar>
    
</template>

<script>

//import logo from '../../assets/images/logo.png';
import _ from 'lodash';


export default {

    methods: {
        changeLanguage(e){

            const lang = _.lowerCase(e.target.outerText);

            localStorage.setItem('lang', lang);
            
            window.location.reload();

        }
    }
    
}
</script>

<style scoped>
.logo{
    width: 100px;
    margin: 0 10px;
}

</style>