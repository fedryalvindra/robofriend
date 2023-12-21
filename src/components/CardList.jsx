import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    
    return (
        <div>
           {
            robots.map((user) => {
                // when we do a loop, we have to give a unique key
                // key prop should have something that doesnt change. for example. index could change if array items get moved.
                // so a better key in this case would be something unique like id
                return  (
                    <Card 
                    key = {user.id} 
                    id = {user.id} 
                    name = {user.name} 
                    email = {user.email}
                    />
                );
            })
           }
        </div>
    );
}

export default CardList