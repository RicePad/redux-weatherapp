import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';




class App extends React.Component{
    render(){
        return <div>
                Hello World
                    <SearchBar />
                </div>;
    }
    
}
// const App = function(){
//      return <div>Hello World!</div>;
// };


ReactDom.render(<App />, document.querySelector(".container"));