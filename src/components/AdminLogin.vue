<template>
  <div
    class="flex flex-wrap content-center bg-gray-900 sm-h-full h-screen pt-2"
  >
    <div
      class="
        container
        m-auto
        grid grid-cols-1
        lg:grid-cols-2
        sm-grid-rows-2
        font-sans
        bg-gray-800
        h-auto
        w-8/12
      "
    >
      <div class="hidden lg:block lg:w-auto h-auto">
        <img src="@/assets/login.png" />
      </div>

      <div class="p-10 font-sans">
        <div
          class="
            font-sans font-bold
            text-lg
            lg-text-xl
            text-green-400
            lg:mb-5
            mb-3
          "
        >
          Login
        </div>
        <div
          class="font-medium tracking-normal text-xs md:text-md text-gray-200"
        >
          Welcome Back, Please login to admin account first.
        </div>
        <div>
          <div class="my-auto text-sm md:text-lg">
            <input
              v-model="username"
              class="
                mt-5
                p-2
                w-full
                focus:outline-none focus:ring focus:border-gray-900
              "
              type="username"
              name="username"
              placeholder="Username"
              autocomplete="off"
            />
            <div
              v-if="this.usernameErrorFlag === true"
              class="text-sm text-red-500"
            >
              please enter your username
            </div>
            <input
              type="password"
              v-model="password"
              class="
                mt-5
                p-2
                w-full
                focus:outline-none focus:ring focus:border-gray-900
              "
              name="password"
              placeholder="Password"
              autocomplete="off"
            />
            <span v-if="this.passErrorFlag" class="text-sm text-red-500"
              >please enter a password</span
            ><br />
            <button
              type="submit"
              class="
                mt-5
                w-6/12
                md:w-4/12
                bg-green-400
                text-gray-100
                p-3
                rounded-md
              "
              @click="login"
            >
              Login
            </button>
            <br />
            <div v-if="this.loginFlag === true" class="text-sm text-green-500">
              Successfully Logged In
            </div>
            <div
              v-else-if="this.loginFlag === false"
              class="text-sm text-red-500"
            >
              Wrong username or password!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",

  data() {
    return {
      username: "",
      password: "",
      loginData: "",
      loginFlag: "",
      usernameErrorFlag: "",
      passErrorFlag: "",
    };
  },
  methods: {
    login() {
      console.log("login called");
      if (this.username.length < 1 && this.password.length < 1) {
        console.log("if 0");
        this.usernameErrorFlag = true;

        this.passErrorFlag = true;
        this.loginFlag = "";
      } else if (this.username.length < 1) {
        console.log("if ");
        this.passErrorFlag = false;
        this.usernameErrorFlag = true;
        this.loginFlag = "";
      } else if (this.password.length < 1) {
        console.log("if 1");

        this.usernameErrorFlag = false;
        this.loginFlag = "";
        this.passErrorFlag = true;
      } else if (this.username == "admin" && this.password == "admin123") {
        console.log("if 2");
        this.usernameErrorFlag = "";
        this.passErrorFlag = "";
        this.loginFlag = true;
      } else if (this.username != "admin" || this.password != "admin123") {
        console.log("if 3");
        this.usernameErrorFlag = "";
        this.passErrorFlag = "";
        this.loginFlag = false;
      }
    },
    valLogin() {
      console.log(this.username, this.password, "passworr");
      this.$api.login
        .loginApi({
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.loginData = response;
          this.$store.commit("updateLogin", true);
          console.log(this.loginData, "responseeee");
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was annnn error!", error);
        });
    },
    validateLogin() {
      if (
        this.email === this.$store.state.admin.email &&
        this.password === this.$store.state.admin.password
      ) {
        console.log("Vaidated Login");
        this.$store.commit("updateLogin", true);
      } else {
        console.log(
          this.$store.state.admin.email,
          this.$store.state.admin.password,
          this.email,
          this.password,
          "not valid"
        );
      }
    },
  },
};
</script>


