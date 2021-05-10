import defaultAxios from "axios";

const clientApi = defaultAxios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json" },
});

class UsersAPI {
  static async getUsers() {
    try {
      const response = await clientApi.get("users");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UsersAPI;
