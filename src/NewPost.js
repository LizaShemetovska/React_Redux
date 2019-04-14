import React, {Component} from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList'

export default class NewPost extends Component{
    state = {
        title: '',
        body: '',
    }
    }
    handleInputChange =event=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleReset=() =>{
        this.setState({
            title: '', 
            body: '',
    });
    }
    handleSubmit=event=>{
        event.preventDefault();
        if(this.state.title.trin()&& this.state.body.trin())
        {
            console.log(this.state);
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        placeholder="Title" 
                        name="title" 
                        className="form-control" 
                        onChange={this.handleInputChange}
                         value={this.state.title}/>
                    </div>
                    <div className="form-group">
                        <textarea cols="20"
                        rows="8"
                        placeholder="body"
                        name="body"
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.body}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add new post</button>
                        <button type="reset" className="btn btn-warning" onReset={ () =>  this.handleReset()} >Reset form</button>
                        </div>
                </form>
            </div>
        );
    }
}