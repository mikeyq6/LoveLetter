import React from 'react'
import Card from './card'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players : [
                { name: 'Bob'},
                { name: 'Fred'}
            ],
            deck : [],
            playedCards : [
                { 
                    key: '1_2',
                    number: 1,
                    playable: false
                },
                { 
                    key: '2_1',
                    number: 2,
                    playable: false
                },
                { 
                    key: '4_2',
                    number: 4,
                    playable: false
                }
            ]
        };
    }

    renderCard(card) {
        return (
            <Card playable={card.playable} number={card.number}></Card>
        );
    }

    render() {
        return (
            <div>
                <h1>Game</h1>
                <h2>Players</h2>
                <ul>
                    {this.renderPlayerList(this.state.players)}
                </ul>
                <h2>Played Cards</h2>
                <ul>
                    {this.renderCards(this.state.playedCards)}
                </ul>
            </div>
        );
    }  

    renderPlayerList(players) {
        let listitems = [];
    
        for(const player of players) {
            listitems.push(<li>{player.name}</li>)
        }
    
        return listitems;
    }

    renderCards(cards) {
        let carditems = [];

        for(const card of cards) {
            carditems.push(this.renderCard(card));
        }

        return carditems;
    }
}  
