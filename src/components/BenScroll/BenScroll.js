import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'

/**
 * BenScroll，支持上拉刷新，下拉加载
 * 无法使用slot, taro的问题
 */
export default class BenScroll extends Component {

  constructor(){
    super(...arguments)
  }

  onScrolltoupper() {
    this.props.onScrolltoupper()
  }

  onScroll(){
    this.props.onScroll()
  }

  render(){

    const { slot } = this.props
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop='0'
        style='height: 150px;'
        lowerThreshold='20'
        upperThreshold='20'
        onScrolltoupper={this.onScrolltoupper}
        onScroll={this.onScroll}>
        { slot }
      </ScrollView>
    )
  }

}