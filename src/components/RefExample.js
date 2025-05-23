import React, { Component } from 'react'

class RefExample extends Component {
    constructor(props) {
      super(props)
    
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) =>{
            this.cbRef = element
        }
       
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    focusInput =()=>{
       this.inputRef.current.focus()
    }
  render() {
    return (
        <div>
            <input type="text" ref={this.inputRef}/>
            <input type="text" ref={this.setCbRef}/>
            <button onClick={this.focusInput}>Click Me</button>
        </div>
    )
  }
}

export default RefExample