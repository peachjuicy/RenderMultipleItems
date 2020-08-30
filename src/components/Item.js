import React, { Component } from 'react'

export default class Item extends Component {
    handleDislikeVoting = (event) => {
        event.preventDefault();
       this.props.ondislikeVote(this.props.id);
    }
    handleLikeVoting = (event) => {
        event.preventDefault();
       this.props.onlikeVote(this.props.id);
    }
    render() {
        return (
             //rendering 1 item
            //the Item component can access props through the object's this.props
            //interweaving props with HTML elements is the way to create dynamic data driven React components
            <div className="row ">
                <div className="col s12 l6 offset-l3">
                    <div className="card green lighten-3">
                        <div>Name: {this.props.name}</div>
                        <div>Email: {this.props.email}</div>
                        <div>Street Address {this.props.address}</div>
                        <div> Biography: {this.props.bio}</div>
                        <div>Image: {this.props.image}</div>
                        <div>ID: {this.props.id}</div>
                    </div>
                    <div>
                        {/*onClick tells React to set up a click event listener,
                        when the star is clicked , React calls handleVoting,
                        hadleVOting sets prop onVote to the id value of the prop,
                        handleClickVote in OneItemList component increments the votes*/ }
                        
                        <a href=" " onClick={this.handleLikeVoting} >
                        <i className="small material-icons">arrow_upward</i> 
                        {this.props.likeVote} </a>
                        <a href=" " onClick={this.handleDislikeVoting} >
                        <i className="small material-icons">arrow_downward</i> 
                        {this.props.dislikeVote}
                        </a>
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}
