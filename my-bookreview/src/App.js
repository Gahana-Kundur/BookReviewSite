import React, {component} from 'react';
import './App.scss';
import Spinner from './components/spinner'
import Overlay from './components/overlay'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      books: [null],
      isLoaded: true,
    };
}

componentDidMount(){
  fetch('https://gist.githubusercontent.com/Gahana-Kundur/03746af020bd7cfe3aff1a3ca9dd8f06/raw/63dab40de64e31495fd351dfef2f08f59a51601d/bookish%2520data')
    .then((res)=> res.json())
    .then((json)=>{
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
    let {isLoaded, books} =this.state;

    if(isLoaded){
      return(
        <Overlay>
          <Spinner />
        </Overlay>
      )
    }else{
      return (
      <div className="app">
        <p> These are the books!!</p>

        {books.map((book) =>(
          <p key={book.id}>{book.title}</p>
        )
        )}
      </div>
    );
    }
  }

}
export default App;
