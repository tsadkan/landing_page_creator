<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h1 class="header">Creator</h1>
            <img src="@/assets/logo.png" style="height:60px">
            <p class="subtitle has-text-white">Please login to proceed.</p>
            <div class="box">
              <form @submit.prevent="signUp" novalidate>
                <b-field
                  :type="{'is-danger': errors.has('username')}"
                  :message="errors.first('username')"
                >
                  <b-input
                    v-model="user.username"
                    placeholder="User name"
                    name="username"
                    v-validate="'required'"
                    data-vv-validate-on="none"
                  ></b-input>
                </b-field>
                <b-field
                  :type="{'is-danger': errors.has('email')}"
                  :message="errors.first('email')"
                >
                  <b-input
                    type="email"
                    v-model="user.email"
                    placeholder="Email"
                    name="email"
                    v-validate="'required|email'"
                    data-vv-validate-on="none"
                  ></b-input>
                </b-field>
                <b-field
                  :type="{'is-danger': errors.has('password')}"
                  :message="errors.first('password')"
                >
                  <b-input
                    type="password"
                    v-model="user.password"
                    placeholder="Password"
                    name="password"
                    v-validate="'required'"
                  ></b-input>
                </b-field>
                <button :class="{'is-loading': isLoading }"
                class="button login-button
                is-block is-primary is-medium is-fullwidth">Sign up</button>
                Already have account?<a href="#" class="forgot-password"
                 @click.prevent="$router.push({ name: 'login' })"> Log In</a><br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-cycle
import { AuthService } from '@/services/services.index';

export default {
  name: 'Signup',
  data() {
    return {
      authError: '',
      isLoading: false,
      user: {},
    };
  },
  methods: {
    async signUp() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        this.isLoading = true;
        try {
          await AuthService.signUp(this.user.username,
            this.user.email, this.user.password);
          this.$validator.reset();
          this.$router.push({ name: 'login' });
          this.isLoading = false;
        } catch (error) {
          this.isLoading = false;
          console.log('error:::', error);
          if (error && error.statusCode === 401) {
            this.authError = 'Email or password is incorrect';
          }
        }
      }
    },
  },
};
</script>
<style>
.header {
  color: #51db8f;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
