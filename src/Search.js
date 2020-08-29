import React from 'react'

class Search extends React.Component
{
    state={text:''};

    onInputChange=(event)=>
    {
        this.setState({text:event.target.value})

    }

    OnFormSubmit=(event)=>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.text)
    }


    render(){
        return (
            <div className="serachbar ui segment">
                <form className="ui form" onSubmit={this.OnFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.text} onChange={this.onInputChange}/>
                        

                    </div>
                </form>

            </div>
        )
    }
};
export default Search;