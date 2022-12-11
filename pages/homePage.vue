<template>
  <div class="homePage-content d-flex align-items-center justify-content-center flex-column text-white">
    <div class="homePage-login text-center">
      <input v-model="username" type="text" class="form-control mb-2" placeholder="Username" />
      <input v-model="password" type="password" class="form-control mb-2" placeholder="Password" />
      <button @click="loginChat" class="btn btn-secondary px-5 py-2">Login</button>
    </div>
  </div>
</template>
   
  
<script scoped>
export default {
  name: "homePage",
  data() {
    return {
      username: null,
      password: null,
      users: [
        {
          id: 0,
          username: 'rajabzadeh',
          password: '123',
        },
        {
          id: 1,
          username: 'khadangi',
          password: '456',
        },
      ],
    };
  },
  methods: {
    loginChat() {
      this.users.forEach((user) => {
        if (user.username == this.username && user.password == this.password) {
          localStorage.setItem("username", user.username)
          localStorage.setItem("userId", user.id)
          this.$router.push('/chat')
        }
      });
    },
  },
};
</script>
  
  
<style scoped>
.homePage-content {
  height: 100% !important;
  background-color: #09141a;
}

.homePage-login {
  width: 30vh;
}
</style>
  