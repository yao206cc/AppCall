import {
  Toast
} from "mint-ui"

/**
 * JKEventHandler为对象，挂载在window对象下
 */
const appCall = {
  /**
   * 请求响应失败返回stateCode
   * @param {*} stateCode 响应失败状态码
   */
  responseFail(stateCode) {
    JKEventHandler.appCallFunction("responseFail", stateCode);
  },
  /**
   * 获取token
   * @param {*} params 
   */
  getToken(params) {
    return new Promise((resolve, reject) => {
      try {
        JKEventHandler.appCallFunction('getToken', params, data => {
          resolve(data);
        });
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default appCall