import React, {Component} from 'react';
import marked from 'marked';
import './App.css';


class App extends Component {  
  state={
    contents: [],
    text: '',
    content: ''
  }

  handleChange = e =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handlePublish = e =>{
    // debugger
    // let content =  e.target.value.split('.');
    this.setState({
      text: '',
      content: this.state.content.concat('\n', marked(this.state.text))
    })
  }
  
  render(){
    let {text, content} = this.state;
    // console.log(marked)
    // debugger
    return (
      <div className="App">
      <header className='header'>
        <h1>Responsive Markdown</h1>
      </header>
        <textarea className='textarea' onChange={this.handleChange} value={text} rows={15} name='text'>
          
        </textarea>
        <button onClick={this.handlePublish}>Publish</button>
        <div className='content' dangerouslySetInnerHTML={{__html: content}}>
          
        </div>
    </div>
  );
  }
}

export default App;
