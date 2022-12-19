import { ElNotification } from "element-plus";

export interface MessageParams {
  /** 提示title */
  title?: string;
  /** 提示内容 */
  message: string;
  /** 位置:top-right/top-left/bottom-right/bottom-left */
  position?: string;
  /** 提示框类型 success/warning/info/error */
  type?: String;
  /** 过期时间： 0不过期 */
  duration?: number;
}

/**
* @description 提示信息框
* @param 参考接口MessageParams参数定义
*/
export function notifiMessage(data: MessageParams) {
  let customClass: string = "";
  switch (data.type) {
    case "success":
      customClass = "twNotifiSuccess";
      break;
    case "warn":
      customClass = "twNotifiWaring";
      break;
    case "info":
      customClass = "twNotifiInfo";
      break;
    case "error":
      customClass = "twNotifiError";
      break;
  }
  ElNotification({
    title: data.title||"提示",
    message: data.message,
    position: data.position||"bottom-right",
    customClass: customClass||"twNotifiSuccess",
    duration: (data?.duration??3500),
    type: data.type
  })
}