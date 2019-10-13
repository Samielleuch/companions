import api from "@/services/Api";

export default {
  register(info) {
    return api().post("auth/register", info);
  }
};
