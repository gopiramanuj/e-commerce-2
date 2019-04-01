import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Two Piece',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
        img:'https://images.koovs.com/uploads//products/112941_8dfd61bb77c1f8b2239235538c67badd_image1_search_big.jpg',
      },
      {
        id: 2,
        title: 'Check Print midi',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 35,
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/116376_8837d0ac8d8649140d0cfa1de44c7848_image1_zoom.jpg',
      },
      {
        id: 3,
        title: 'One Piece',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 110,
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/114099_c5d3183e3a8f441565bbc83d0bcb5ba4_image1_zoom.jpg',

      },
      {
        id: 4,
        title: 'Printed midi Dress',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 50,
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/114349_4dd586df1b3ae7bc817b3432bdfec43a_image1_zoom.jpg',
      },
      {
        id: 5,
        title: 'Long Top',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 35,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/115437_87c98c26c7bc880297e93d245c126a4a_image1_zoom.jpg',
      },
      {
        id: 6,
        title: 'Floral Printed Shift Dress',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 110,
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/112942_6711a78a8ce77420d84cf4e633c5556f_image1_zoom.jpg',
      },
      {
        id: 7,
        title: 'Balloon Slive',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 50,
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/112154_df4ce410e809d14a5bf8484cf723b37f_image1_zoom.jpg',
      },
      {
        id: 8,
        title: 'Strip Dress',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 35,
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
         img:'https://images.koovs.com/uploads//products/112788_9add44607df3aed05d84d5623fbff5b8_image1_zoom.jpg',
      },
      {
        id: 9,
        title: 'Off Shoulder',
        description: 'This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.',
        price: 110,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
        img:'https://images.koovs.com/uploads//products/117419_66b78391074b0d5faee8f7cb88c5ee34_image1_zoom.jpg',
      }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.quantity;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  }
  
  
});
