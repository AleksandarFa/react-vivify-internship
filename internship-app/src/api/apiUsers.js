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

  static async getTodos() {
    try {
      const response = await clientApi.get("todos");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async postComment(comment) {
    try {
      const comment = await clientApi.post("comments", { comment });
      return comment.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default UsersAPI;
