import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import './index.less'

import { getWindowHeight } from '../../common/utils'

import OrderItem from '../../bcomponents/OrderItem/OrderItem'

import CommonComponent from '../../bcomponents/CommonComponent/CommonComponent'

import ThemeColor from '../../common/constants/color'

/**
 * 首页
 */
export default class Index extends CommonComponent {

  constructor () {
    this.state = {
      scrollHeight: getWindowHeight()
    }
  }

  config = {
    navigationBarTitleText: '首页',
    // 允许下拉刷新
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#3A82F0',
    navigationBarTextStyle: '#fff',
  }

  /**
   * 用于优化组件性能
   */
  componentWillReceiveProps (nextProps) {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () { }

  // 无法单独抽出使用，taro问题
  // renderList(){
  //   return (
  //     <View>
  //       <Text>123</Text>
  //     </View>
  //   )
  // }

  /**
   * 获取初始化数据
   */
  getInitData() {
    console.log('====================================');
    console.log('获取初始化数据');
    console.log('====================================');
  }

  /**
   * 微信的方法：下拉刷新
   */
  onPullDownRefresh() {
    console.log('====================================');
    console.log('下拉刷新');
    console.log('====================================');
  }

  /**
   * 获取下一页的数据
   */
  getNextListData(){
    console.log('====================================');
    console.log("获取下一页的数据");
    console.log('====================================');
  }

  render () {

    const { scrollHeight } = this.state

    return (
      <View className="p-index">
        <AtIcon prefixClass='icon' value='guanzhu' size='30' color='#000'></AtIcon>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          enableBackToTop
          scrollTop='0'
          lowerThreshold='20'
          upperThreshold='20'
          style={{height: scrollHeight}}
          onScrolltolower={this.getNextListData}>
          <OrderItem />
          <OrderItem />
        </ScrollView>
      </View>
    )
  }
}
