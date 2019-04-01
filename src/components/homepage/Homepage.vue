<template>
  <div>
    
    <products-list-container></products-list-container>
  </div>
</template>

<script>
import ProductsListContainer from '../products_list/ProductsListContainer';


export default {
  name: 'homepage-component',
  components: {
    'products-list-container': ProductsListContainer,
    
  }
};
</script>
