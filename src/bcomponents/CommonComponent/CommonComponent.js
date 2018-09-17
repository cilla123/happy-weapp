import Taro, { Component } from '@tarojs/taro'

/**
 * 基础组件
 */
export default class CommonComponent extends Component {

  constructor(props){
    super(props)
  }

  /**
   * 用于优化组件性能
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * 作用：程序被载入
   * 说明：在微信小程序中这一生命周期方法对应 app 的 onLaunch
   */
  componentWillMount() {}

  /**
   * 作用：程序被载入
   * 说明：在微信小程序中这一生命周期方法对应 app 的 onLaunch， 在 componentWillMount 后执行
   */
  componetDidMount() {}

  /**
   * 组件将被卸载
   */
  componentWillUnmout() {}

  /**
   * 作用：程序展示出来
   * 说明：在微信小程序中这一生命周期方法对应 onShow， 在H5中同样实现
   */
  componentDidShow() {}

  /**
   * 作用： 程序被隐藏
   * 说明：在微信小程序中这一生命周期方法对应 onHide， 在H5中同样实现
   */
  componentDidHide() {}

  /**
   * 组件发生错误，捕捉异常
   */
  componentCatchError() {}

}