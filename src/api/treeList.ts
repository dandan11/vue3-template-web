import { http } from "@/utils/http";
import { CommonResult } from "./type";
interface Result extends CommonResult {
  data?: {
    /** 列表数据 */
    list: Array<any>;
  };
};

/** 树列表 */
export const getTreeList = () => {
  return http.request<Result>("post", "/getTreeList");
};