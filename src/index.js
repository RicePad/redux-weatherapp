import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBoXPSm6E9AMv9gzzbjgtN8qI2WMvu3A7A';



//Object key of API wiht search on term which callbacks a function



class App extends React.Component {
     constructor(props){
     super(props);
         
        this.state = { 
            
            videos: [],
            selectedVideo: null
        }; 
        
        this.videoSearch('ReactJS');
        
        
     }
        videoSearch(term){
             YTSearch({key: API_KEY, term: term}, (videos) =>  {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
                
            });
                 
        });}
            
        
        
    
     render(){
      return    <div>
                    <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                    <VideoDetail video={this.state.selectedVideo}  />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                 
                 </div>;
    }       
    
}

// const App = function(){
//     return( 
//         <div>
//           <SearchBar />
//         </div>
//         );
    
    
// };

ReactDom.render(<App />, document.querySelector('.container'));