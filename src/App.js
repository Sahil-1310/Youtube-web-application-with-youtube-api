// 
import React from 'react'
import Search from './Search'
import Youtube from './API/Youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
const KEY='AIzaSyD5Rp3HUFcw36Ms7h5jNV6m26_YyWYcrK4'

class App extends React.Component
{  
    state={video:[] ,SelectedVideo:null }

    componentDidMount()
    {
        this.onTerm('Canada UBC')
    }

     onTerm=async term=>
    {
        const response = await Youtube.get('/search', {
            params: {
              q: term,
              part: 'snippet',
              maxResults: 10,
              type: 'video',
              key: KEY,
            },
          });
        console.log(response)
        this.setState({video:response.data.items,
        SelectedVideo:response.data.items[0]})

    }
    
    onVideoSelect=(video)=>
    {
        this.setState({SelectedVideo:video})
    }

    render(){
    return(
        <div className="ui container">
            <Search onSubmit={this.onTerm} />
            <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                <VideoDetails video={this.state.SelectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.video}/>

                </div>
            </div>
        </div></div>
    )
    }
}
export default App;