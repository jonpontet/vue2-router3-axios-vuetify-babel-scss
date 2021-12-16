import http from "../http-common";

/**
 * CRUD data service
 */
class DataService {
  getAll() {
    return http.get("/fruit");
  }

  get(id) {
    return http.get(`/fruit/${id}`);
  }

  create(data) {
    return http.post("/fruit", data);
  }

  update(id, data) {
    return http.put(`/fruit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/fruit/${id}`);
  }
}

export default new DataService();
