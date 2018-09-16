import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './HLabel.less'

/**
 * 标签类型
 */
export default class Label extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  config = {}

  static defaultProps = {
    text: ''
  }

  componentWillReceiveProps (nextProps) { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { text } = this.props.text
    return (
      <View className="c-label mr-20">
        <Text className="txt">{text}</Text>
      </View>
    )
  }
}
