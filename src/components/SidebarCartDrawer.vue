<template>
  <div 
    class="SidebarCart__Modal"
    :class="{ 'is-visible': active }"
    @click="$emit( 'close-sidebar' )"
  />
  <div 
    class="SidebarCart"
    :class="{ 'is-visible': active }"
  >
    <button
      type="button"
      class="SidebarCart__CloseBtn"
      @click="$emit( 'close-sidebar' )"
    >
    </button>
    <div class="SidebarCart__Inner">
      <div 
        v-if="product"
        class="SidebarCart__ProductWrapper"
      >
        <h4 class="SidebarCart__ProductTitle">
          {{ product.title }}
        </h4>
        <span class="SidebarCart__ProductPrice">
          ${{ product.price }}
        </span>
        <span class="SidebarCart__ProductQuantity">
          {{ getProductQuantity }}
        </span>
      </div>
      <div
        v-else
      > 
        <span>Your Cart Is Empty</span>
      </div>
    </div>
    <div class="SidebarCart__Footer">
      <span class="SidebarCart__TotalText">Total</span>
      <span class="SidebarCart__TotalPrice">
        {{ getCartTotal }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'product',
      'active'
    ],
    computed: {
      getProductQuantity() {
        return 0;
      },
      getCartTotal() {
        return 100;
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .SidebarCart {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    width: 420px;
    transform: translateX(100%);
    opacity: 0;
    visibility: none;
    border-left: solid black 1px;
    transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out;
    background-color: #fff;
    
    // .SidebarCart.is-visible
    &.is-visible {
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
      height: 100%;
    }

    // .SidebarCart__Inner
    &__Inner {
      display: none;

      // .is-visible .SidebarCart__Inner
      .is-visible & {
        display: block;
      }
    }

    // .SidebarCart__Modal
    &__Modal {
      display: none;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(124, 124, 124, 0.5);
      z-index: 99;

      // .SidebarCart__Modal.is-visible 
      &.is-visible {
        display: block;
      }
    }

    // .SidebarCart__Footer
    &__Footer {
      position: absolute;
      bottom: 0;
    }

    // .SidebarCart__CloseBtn
    &__CloseBtn {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      position: absolute;
      right: 20px;

      // .SidebarCart__CloseBtn:focus
      &:focus {
        outline: none;
      }

      // .SidebarCart__CloseBtn::before
      &::before {
        content: '\00d7';
        display: block;
        color: #000;
        font-size: 40px;
      }
    }
  }
</style>
