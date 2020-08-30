import React from 'react'
//importing users info from Users
import faker from 'faker'
import Item from './Item';

//to render multiple items map method is used
//array's map method takes function as an argument. It calls this function with each item inside of the array (getUsers)
//and builds a new array by using the return value from each function call
//each item in a list needs a key property which needs to be unique per item
class MultipleItems extends React.Component {
   
    //votes needs to be stateful because incrementing changes the state
    //at the beginning there is no vote
     state = {
         likeVotes: '',
         dislikeVotes: '',
        
     }
     //when the component mounts the votes are taking the user.vote as the starting value
     componentDidMount() {
         this.setState( {
            likeVotes: this.user().likeVote,
            dislikeVotes: this.user().dislikeVote,
            userInfo: this.user()
         })
     }
     //getting data from faker.js
    user = () => { return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
        image: faker.image.avatar(),
        id:faker.random.number(),
        dislikeVote:0,
        likeVote:1
    }
    }

    //users is an array of data which needs to be creted before maping it
//.fill(undefined) needs to be called before map, because there are no elements to map through
    users = () => {
     return new Array(5).fill(undefined);
        }

     getUsers = () => {
    return this.users().map(()=> {
            return this.user;
    });

}
    handleLikeVote = ()=> {
        this.setState(prevState=> {
            console.log("Name is: ", this.user().id)
                return {
                likeVotes: prevState.likeVotes + 1
               }
            
        })
     }
     
    handleDislikeVote = (prevState)=> {
       this.setState(prevState=> {
           return {
            dislikeVotes: prevState.dislikeVotes - 1,
           }
       })
    }
  
   
    render () {
        
        return (
         
            //map through getUsers to show all the users
                 <div>
                 <h4>Rendering multiple items</h4>
                     {
                        this.getUsers().map((user)=> {
                        return  <Item 
                name={this.user().name}
                email={this.user().email}
                id={this.user().id} 
                key={this.user().id}
                address={this.user().address}
                bio={this.user().bio}
                image={this.user().image}
                dislikeVote={this.state.dislikeVotes}//getting the vote from the state and rendering in the Item
                ondislikeVote={this.handleDislikeVote}
                likeVote={this.state.likeVotes}//getting the vote from the state and rendering in the Item
                onlikeVote={this.handleLikeVote}
                />
                        })
                     }
                   
                 </div>
        )
    }
}
export default MultipleItems