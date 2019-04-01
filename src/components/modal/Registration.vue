<template>
    <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p v-if="!isUserSignedUp" class="modal-card-title">{{ modalTitle }}</p>
          <p v-if="isUserSignedUp" class="modal-card-title">{{ modalTitleRegistered }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <form @submit.prevent="registerUser">
          <section class="modal-card-body">
            <div v-if="!isUserSignedUp">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightNameWithError ? 'input is-danger' : 'input']"
                    type="text"
                    :placeholder="namePlaceholder"
                    v-model="userData.name"
                    @keyup="checkNameOnKeyUp(userData.name)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
                <p v-if="highlightNameWithError" class="help is-danger">{{ nameErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                    type="email"
                    :placeholder="emailPlaceholder"
                    name="emailName"
                    v-model="userData.email"
                    @keyup="checkEmailOnKeyUp(userData.email)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                 
                </p>
                <p v-if="highlightEmailWithError" class="help is-danger">{{ emailErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                    type="password"
                    :placeholder="passwordPlaceholder"
                    v-model="userData.password"
                    @keyup="checkPasswordOnKeyUp(userData.password)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                 
                </p>
                <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordErrorLabel }}</p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightRepeatPasswordWithError ? 'input is-danger' : 'input']"
                    type="password"
                    :placeholder="repeatPasswordPlaceholder"
                    v-model="userData.repeatPassword"
                    @keyup="checkRepeatPasswordOnKeyUp(userData.repeatPassword)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  
                </p>
                <p v-if="highlightRepeatPasswordWithError" class="help is-danger">{{ notEqualErrorLabel }}</p>
              </div>

            </div>
            <div v-if="isUserSignedUp" class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="title">Welcome {{ userData.name }}!</p>
                  <p class="heading">Now you are a member</p>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button v-if="!isUserSignedUp" class="button is-success">{{ primaryBtnLabel }}</button>
            <button v-if="isUserSignedUp" type="button" class="button is-info" @click="closeModal">{{ btnRegisteredLabel }}</button>
          </footer>
        </form>
      </div>
    </div>
</template>

<script>
import { isValidEmail } from '../../validators';
import firebase from 'firebase'
import db from './firestore'
export default {
  name: 'registration-component',

  data () {
    return {
      userData:{
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
      },

      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      namePlaceholder: 'Name*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Password*',
      repeatPasswordPlaceholder: 'Repeat Password*',
      notEqualErrorLabel: 'Passwords must be equal',
      passwordErrorLabel: 'Password required',
      nameErrorLabel: 'Name required',
      emailErrorLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserSignedUp () {
      
      return this.$store.getters.isUserSignedUp;
    },

    openModal () {
      if (this.$store.getters.isSignupModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    
    registerUser(){
           
      firebase.auth().createUserWithEmailAndPassword(this.userData.email, this.userData.password)
        .then(() => {
              firebase.auth().currentUser.updateProfile({
              displayName: this.name

              })
              this.highlightEmailWithError = false;
              this.highlightPasswordWithError = false;
              this.isFormSuccess = true;
              this.$store.commit('setUserName', this.name);
              this.$store.commit('isUserSignedUp', this.isFormSuccess);
              this.$store.commit('isUserLoggedIn', this.isFormSuccess);
        }).catch(err => {
          alert("This Email Id is allready exist")
            this.errorMessage = err.message
          });

    },
    closeModal () {
      this.userData.name=null;
      this.userData.email=null;
      this.userData.password=null;
      this.userData.repeatPassword=null;
      this.$store.commit('showSignupModal', false);
    },
    
    checkNameOnKeyUp (nameValue) {
      if (nameValue) {
        this.highlightNameWithError = false;
      } else {
        this.highlightNameWithError = true;
      }
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail (emailValue)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;

        if (this.userData.repeatPassword == this.userData.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightPasswordWithError = true;
      }
    },
    checkRepeatPasswordOnKeyUp (repeatPasswordValue) {
      if (repeatPasswordValue) {
        if (repeatPasswordValue == this.userData.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightRepeatPasswordWithError = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .fa-exclamation-circle {
    color: red;
  }
  .fa-check {
    color: green;
  }
</style>


