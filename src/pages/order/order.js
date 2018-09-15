import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './order.less'

export default class Order extends Component {

  constructor () {
    this.state = {}
  }

  config = {
    navigationBarTitleText: '订单'
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
        <Text>订单</Text>
      </View>
    )
  }
}
