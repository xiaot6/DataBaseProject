import http from "../http-common";

class PriceDataService {
  getAll() {
    return http.get("/all4cats");
  }

  get(id) {
    return http.get(`/all4cats/${id}`);
  }

  create(data) {
    return http.post("/all4cats", data);
  }

  update(id, data) {
    return http.put(`/all4cats/${id}`, data);
  }

  delete(id) {
    return http.delete(`/all4cats/${id}`);
  }

  deleteAll() {
    return http.delete(`/all4cats`);
  }

  findByTitle(title) {
    return http.get(`/all4cats?title=${title}`);
  }
}

export default new PriceDataService();