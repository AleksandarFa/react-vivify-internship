import axios from "axios";
import apiClient from "./apiService";

class UsersAPI {
  static async getUsers() {
    const response = await apiClient.get("/users");
    return response;
  }
}

export default UsersAPI;
