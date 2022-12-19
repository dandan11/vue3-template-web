import { http } from "@/utils/http";
import { CommonResult } from "./type";

interface Result extends CommonResult {
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/getAsyncRoutes");
};
