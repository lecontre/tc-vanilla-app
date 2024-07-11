import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import axios from "axios";
import "./../Styles/TinderCards.css";

interface Person {
    name: string;
    imgUrl: string;
}

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("https://tc-vanilla-api.onrender.com/tinder/cards");
            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction:any, nameToDelete:any) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name:any) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person: Person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;