import http from "../http-common";

class HouseDataService {

  getByBed(bed) {
    return http.get(`/housebybedrooms/${bed}`);
  }

  getByPrice(price) {
    return http.get(`/housebyprice/${price}`);
  }

  getHouseById(id) {
    return http.get(`/housebyid/${id}`);
  }

  getLikesById(id) {
    return http.get(`/likebyid/${id}`);
  }

  updateLikeById(id, data) {
    return http.put(`/updatelikebyid/${id}`, data);
  }

}

export default new HouseDataService();