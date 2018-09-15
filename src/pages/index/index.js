import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../store/actions/counter.js'

import './index.less'

/**
 * 装饰器
 */
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
export default class Index extends Component {

  constructor () {
    this.state = {}
  }

  config = {
    navigationBarTitleText: '首页',
    window: {
      // 允许下拉刷新
      enablePullDownRefresh: true,
    }
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

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
  getInitData(){
    console.log('====================================');
    console.log('获取初始化数据');
    console.log('====================================');
  }

  /**
   * 获取下一页的数据
   */
  getNextListData(event){
    const scrollHeight = event.scrollHeight
    // console.log('====================================');
    // console.log(event);
    // console.log('====================================');
  }

  render () {

    return (
      <View>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View> */}
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 150px;'
          lowerThreshold='20'
          upperThreshold='-20'
          onScrolltoupper={this.getInitData}
          onScroll={this.getNextListData}
        >
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
          <View>
            <Text>123</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
