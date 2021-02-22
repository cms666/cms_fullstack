import React,{Component} from 'react'
class App extends Component{
  render(){
    return (  //jsx = js + XML
      <div>
        <ul className="items">
          <li>vue</li>
          <li>{false ? 'react' : 'REACT'}</li>
        </ul>
      </div>
    )
  }
}

export default App