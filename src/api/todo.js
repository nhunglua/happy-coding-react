import axiosClient from "./axiosClient";

const todoApi = {
  getAll() {
    const url = "/todos";
    return axiosClient.get(url);
  },

  add(newItem) {
    const url = `/todos`;
    return axiosClient.post(url, newItem);
  },

  update(todo) {
    const url = `/todos/${todo.id}`;
    return axiosClient.patch(url, todo);
  },

  remove(id) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
