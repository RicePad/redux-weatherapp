import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';



class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          term: ''  
          

        };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm  = this.onSubmitForm.bind(this);
        
    }
    
    
    
    onInputChange(event){
        // console.log(event.target.value);
        this.setState({term: event.target.value});
        
    }
    
    onSubmitForm(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
        
        
        
    }
    
    render(){
        return(
            <form
            onSubmit={this.onSubmitForm}        
            className="input-group">
                <h2>Search Bar</h2>
                <input
                    // onChange={(event) => {term: event.target.value}}
                    onChange = {this.onInputChange}
                    className="form-control"
                    placeholder="Search for forecast"
                    value={ this.state.term}
                />
                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                    
                    >   Submit
                    </button>
                </span>
            </form>
            );
        
    }
    
    
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchWeather }, dispatch);
// }

function mapStateToProps(state){
        return {
            
            
        };
    
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);

// export default connect(mapDispatchToProps)(SearchBar);
