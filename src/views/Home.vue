<template>
  <div class="home">
    <SidebarCartDrawer
      :active="active.sidebar_cart_open"
      :product="product"
      v-on:close-sidebar="hideSidebarCart()"
    />
    <div 
      v-for="product in products"
      :key="product.title"
      class="Product"
    >
      <div class="Buttons__Container">
        <button 
          type="button" 
          class="Buttons__AddToCart Button"
          @click="handleAddToCart(product)"
        >
          Add To Cart
        </button>

        <button 
          type="button" 
          class="Buttons__ClearCart Button"
          @click="handleClearCart()"
        >
          Clear Cart
        </button>
      </div>
  </div>
  </div>
</template>

<script>
  import SidebarCartDrawer from '../components/SidebarCartDrawer';

  export default {
    name: 'Home',
    components: {
      SidebarCartDrawer
    },
    data: () => ({
      products: [
        {
          title: 'Costa Rica 16oz',
          price: 15.99
        }
      ],
      product: null,
      cart: [],
      active: {
        sidebar_cart_open: false
      }
    }),
    computed: {
      getProductPrice() {
        return this.product.price
      }
    },
    methods: {
      handleAddToCart(product) {
        this.product = product;
        this.cart.push(product);
        this.active.sidebar_cart_open = true;
      },
      hideSidebarCart() {
        this.active.sidebar_cart_open = false;
      }
    }
  }
</script>

<style lang="scss">
  .Buttons {

    // .Buttons__AddToCart
    // .Buttons__ClearCart
    &__AddToCart,
    &__ClearCart {
      margin: 10px;
    }
  }

  .Button {
    padding: 10px 15px;
    border: solid #000 1px;
    background-color: transparent;
    color: #000;

    // .Button:hover
    &:hover {
      background-color: #000;
      color: #fff;
    }

    // .Button:focus
    &:focus {
      outline: none;
    }  
  }
</style>