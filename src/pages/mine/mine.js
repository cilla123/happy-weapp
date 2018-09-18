import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './mine.less'

import CommonComponent from '../../bcomponents/CommonComponent/CommonComponent'

export default class Mine extends CommonComponent {

  constructor () {
    this.state = {}
  }

  config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#fff',
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Text>我的</Text>
      </View>
    )
  }
}
