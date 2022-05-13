import axiosClient from "./axiosClient";

const todoApi = {
  getAll() {
    const url = "/todos";
    return axiosClient.get(url);
  },

  add(newItem) {
    const url = `/todos/${newItem.id}`;
    return axiosClient.post(url, { newItem });
  },

  update(newItem) {
    const url = "/todos";
    return axiosClient.patch(url, { newItem });
  },

  remove(id) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
