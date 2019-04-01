<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ path: '/', name: 'homepage-component' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </router-link>

        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <search-component></search-component>
          </div>
        </div>
        
        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <menu-component></menu-component>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <menu-component></menu-component>
      </div>
    </nav>
  </div>
</template>

<script>
  import Menu from '../menu/Menu';
  import Search from '../search/Search';

  export default {
    name: 'header-component',

    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    components: {
      'search-component': Search,
      'menu-component': Menu
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .navbar-end {
    padding-top: 12px;
}
nav.navbar {
    padding-top: 10px;
    border-bottom: 2px solid #e65a73;
}
 .title{
    background: url(http://stellinadiving.com/wp-content/uploads/2018/12/logo-for-dress-designing-122-famous-fashion-logo-design-inspiration-brands.png) no-repeat;
    background-position: 50% 50%;
    background-size: 168px;
    width: 158px;
    height: 71px;
}
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
</style>
