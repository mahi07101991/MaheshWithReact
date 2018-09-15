import React, { Component } from 'react'

export default class row extends Component {
    constructor(props){
        super(props);
        this.state = {
          answer: false
        }
      }
      componentWillReceiveProps(nextProps){
        
          if(nextProps.count.name==='count1' && nextProps.count.count >= 10){
              this.setState({
                  answer:true
              })
          }
          if(nextProps.count.name==='count1' && nextProps.count.count == 0){
            this.setState({
                answer:false
            })
        }
      }
      setMe = () => {
        this.setState({answer:!this.state.answer},()=>{
            this.props.setCount(this.state.answer)
        })
      }
  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a onClick={this.setMe}>
            Heading</a>
          </h4>
        </div>
        <div id="collapse1" class={this.state.answer?"panel-collapse collapse in":"panel-collapse collapse"}>
          <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</div>
        </div>
      </div>
    )
  }
}
