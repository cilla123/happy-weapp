import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './OrderItem.less'

import HLabel from '../../components/HLabel/HLabel'

export default class OrderItem extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  config = {}

  componentWillReceiveProps (nextProps) { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="c-order-item">
        {/* 顶部 */}
        <View className="top">
          <View className="left">
            <HLabel className="mr-20" text="电子数码"/>
            <HLabel text="电脑维修"/>
          </View>
          <View className="right">
            <Text className="price">¥ 5.00</Text>
          </View>
        </View>
        {/* 信息 */}
        <View className="item-info">
          <View className="title">
            <Text>标题：电脑黑屏</Text>
          </View>
          <View className="info">
            <View className="left">
              <Text className="left-main">订单编号：1231233</Text>
              <Text className="left-sub">发布时间：20172727</Text>
            </View>
            <View className="right">
              <Button className="right-action">抢单</Button>
            </View>
          </View>
        </View>
        {/* 备注 */}
        <View className="bottom">
          <Text className="title">备注：</Text>
          <View className="content">
            <Text>222</Text>
          </View>
        </View>
      </View>
    )
  }
}
