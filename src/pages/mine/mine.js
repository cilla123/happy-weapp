import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './mine.less'

export default class Mine extends Component {

  constructor () {
    this.state = {}
  }

  config = {
    navigationBarTitleText: '我的'
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
