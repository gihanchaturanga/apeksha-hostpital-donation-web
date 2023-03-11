import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      name: 'gihan'
    }
  }

  handle = ()=>{
    this.state.name === 'gihan' ? this.setState({...this.state, name: 'Gihan'}) : this.setState({...this.state, name: 'Attanayake'})
  }


  render() {
    return (
      <>
      <h1>{this.state.name}</h1>
       <button onClick={this.handle}>Button</button>
       </>
    );
  }

}
