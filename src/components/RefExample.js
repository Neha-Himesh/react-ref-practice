import React, { Component } from 'react'

export class RefExample extends Component {
    constructor(props) {
      super(props)
    
        this.inputRef = React.createRef()
       
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    focusInput =()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
        <div>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.focusInput}>Click Me</button>
        </div>
    )
  }
}

export default RefExample