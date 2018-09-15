import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// redux的store
const store = configStore()

/**
 * 入口文件
 */
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      "pages/order/order",
      "pages/mine/mine"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      },{
        pagePath: "pages/order/order",
        text: "订单",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      }, 
      {
        pagePath: "pages/mine/mine",
        text: "我的",
        iconPath: "./asset/images/burger.png",
        selectedIconPath: "./asset/images/burger_focus.png"
      }]
    }
  }  

  /**
   * 作用：程序被载入
   * 说明：在微信小程序中这一生命周期方法对应 app 的 onLaunch
   */
  componentWillMount() {}

  /**
   * 作用：程序被载入
   * 说明：在微信小程序中这一生命周期方法对应 app 的 onLaunch， 在 componentWillMount 后执行
   */
  componetDidMount () {}

  /**
   * 组件将被卸载
   */
  componentWillUnmout () {}

  /**
   * 作用：程序展示出来
   * 说明：在微信小程序中这一生命周期方法对应 onShow， 在H5中同样实现
   */
  componentDidShow () {}

  /**
   * 作用： 程序被隐藏
   * 说明：在微信小程序中这一生命周期方法对应 onHide， 在H5中同样实现
   */
  componentDidHide () {}

  /**
   * 组件发生错误，捕捉异常
   */
  componentCatchError () {}

  render () {
    return (
      // redux
      <Provider store={store}>
        {/* 首页入口 */}
        <Index />
      </Provider>
    )
  }
}

// 挂在渲染节点
Taro.render(<App />, document.getElementById('app'))
