import React, {component} from 'react';
import './App.scss';
import Spinner from './components/spinner'
import Overlay from './components/overlay'
import Book from './components/book'
import BookGrid from './components/bookGrid'

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
  fetch('https://gist.githubusercontent.com/Gahana-Kundur/03746af020bd7cfe3aff1a3ca9dd8f06/raw/f73f9a189fa5cdb043e27ca748e21e8385627ec5/bookish%2520data')
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
          <BookGrid>


            {books.map((book) =>(
              <Book key={book.id} {...book}/>
            )
            )}
          </BookGrid>
      </div>
    )}

  }
}

export default App
