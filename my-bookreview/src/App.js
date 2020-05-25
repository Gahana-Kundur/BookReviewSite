import React, {component} from 'react';
import './App.scss';
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      books: [null],
      isLoaded: false,
    }
}

componentDidMount(){
  console.log('I was triggered during componentDidMount')
  fetch('https://gist.githubusercontent.com/Gahana-Kundur/03746af020bd7cfe3aff1a3ca9dd8f06/raw/e1a8e122bd003ccc01ef637347f21513131ed915/bookish%2520data')
    .then((res)=> res.json())
    .then((json)=>{
      console.log("Printing json")
      console.log(json)
      this.setState({
        books: json,
        isLoaded: true
      })
    })
  }
  //Get the books
  // parse them and update the state to conatin the books
  // update the isLoaded to troubleshooting



render(){
    console.log('I was triggered during render')
    let {isLoaded, books} =this.state;

    if(!isLoaded){
      return(
        <Overlay>
          <Spinner />
        </Overlay>
      )
    }else{
      console.log("Printing inside render")
      console.log(books)
      return (
        <div className="app">
          <p> These are the books!!</p>

          {books.map((book) =>(
            <Book key={book.id} {...book}/>
          )
          )}
      </div>
    )}

  }
}

export default App
