import Taro from '@tarojs/taro'

/**
 * 获取当前的环境
 */
export const getCurrentEnv = (env) => {
  return Taro.getEnv()
}

/**
 * 获取设备信息
 */
export const getSystemInfo = () => {
  return Taro.getSystemInfoSync()
}

/**
 * 获取可使用窗口高度
 */
export const getWindowHeight = () => {
  if (getCurrentEnv() === 'WEAPP') {
    return getSystemInfo().windowHeight * 2 + 'rpx'
  } else if (getCurrentEnv() === 'WEB') {
    return getSystemInfo().windowHeight + 'px'
  }
}