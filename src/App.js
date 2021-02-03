
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

  this.state={
    newItem:'',
    list:[]
  }
  }

  deleteItem(id){
    const list =[...this.state.list];

    const updatedList = list.filter (item=> item.id != id);

    this.setState({list:updatedList})
  }


  updateInput(key,value){
    this.setState({
      [key]: value
    });

  }
  addItem(){

    const newItem={
      id: 1+ Math.random(),
      value:this.state.newItem.slice()

    };


    const list=[...this.state.list];

    list.push(newItem);

      this.setState({
        list,
        newItem:""
      });


  }
  render(){
  return (
    <div className="App">
     <div className="title">Create Your ToDoList</div>
     <br/>
     <input
      type='text'
      className="input"
      placeholder="What you wanna do?????"
      value={this.state.newItem}
      onChange={e => this.updateInput('newItem' , e.target.value)}
      />


    <button
      onClick = {() => this .addItem()} className="add"> add</button>
    <br/>
    <ul>
      {this.state.list.map(item => {
        return(
          <li className='item' key={item.id}>
            {item.value}
            
            <button
              className='delete' onClick={() => this.deleteItem(item.id)}>

              Remove

              </button>
              </li>
        )
      })}
    </ul>
    </div>
  );
}
}
export default App;
