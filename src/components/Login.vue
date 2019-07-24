<template>
  <div>
    Login page
  </div>
</template>
<script>
// eslint-disable-next-line import/no-cycle
import { AuthService } from '@/services/services.index';

export default {
  name: 'Login',
  data() {
    return {
      authError: '',
      user: {},
    };
  },
  methods: {
    async login() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        try {
          const success = await AuthService.login(this.user.email, this.user.password);
          if (success) {
            this.$validator.reset();
            this.$router.push({ name: 'home' });
          } else {
            this.$notify({
              title: 'Internal Error',
              type: 'danger',
              message: 'Something went wrong on our side.',
            });
          }
        } catch (error) {
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
