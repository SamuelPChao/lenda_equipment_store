import { defineStore } from "pinia";
import axios from "axios";
import { VueCookies } from "vue-cookies";

export default defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    currentUser: {},
    jwt: $cookies.get("jwt"),
  }),
  actions: {
    async loginUser(values, actions) {
      try {
        const res = await axios.post(
          `https://lenda-server.onrender.com/api/v1/users/login`,
          values
        );
        if (res.status === 200) {
          this.isLoggedIn = true;
          this.currentUser = res.data.data.user;
          const expirationDate = new Date();
          console.log(res.headers);
          expirationDate.setDate(expirationDate.getDate() + 90);
          document.cookie = `jwt=${
            res.data.token
          }; expires=${expirationDate.toUTCString()}; path=/`;
          actions.setValues({
            identification: "",
            password: "",
          });
          return true;
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 401)
          actions.setErrors({
            email: "Email is invalid",
            password: "Password is invalid",
          });
      }
    },
    async getUserStatus() {
      try {
        const res = await axios({
          method: "post",
          url: `https://lenda-server.onrender.com/api/v1/users/isLoggedIn`,
          headers: {
            authorization: this.jwt,
          },
        });
        if (!res.status === 200) {
          return false;
        }
        if (res.status === 200) {
          this.isLoggedIn = true;
          this.currentUser = res.data.data.user;
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async logoutUser() {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/users/logout`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          this.isLoggedIn = false;
          this.currentUser = {};
          document.cookie =
            "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
      } catch (err) {
        console.log(err);
      }
    },
    async signupUser(values, actions) {
      try {
        const res = await axios.post(
          `https://lenda-server.onrender.com/api/v1/users/signup`,
          values
        );
        if (res.status === 201) {
          this.isLoggedIn = true;
          this.currentUser = res.data.data.user;
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 90);
          document.cookie = `jwt=${
            res.data.token
          }; expires=${expirationDate.toUTCString()}; path=/`;
          actions.setValues({
            identification: "",
            password: "",
            passwordConfirm: "",
            name: "",
            email: "",
            address: "",
            phone: "",
          });
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async updateUserInfo(values, actions) {
      try {
        const res = await axios.patch(
          `https://lenda-server.onrender.com/api/v1/users/updateMe`,
          values,
          { withCredentials: true }
        );
        if (res.status === 200) {
          this.currentUser = res.data.data.user;
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async updateUserPassword(values, actions) {
      try {
        const res = await axios.patch(
          `https://lenda-server.onrender.com/api/v1/users/updateMyPassword`,
          { id: this.currentUser.id, ...values },
          { withCredentials: true }
        );
        if (res.status === 200) {
          this.currentUser = res.data.data.user;
          actions.setValues({
            passwordCurrent: "",
            password: "",
            passwordConfirm: "",
          });
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
