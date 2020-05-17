import React from 'react'
import Card from './card'
import Player from './player'

export default class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRunning : false,
            players : [
                { 
                    name: 'Bob',
                    lastPlayedCard: null,
                    currentCards: [],
                    playedCards: [],
                    status: 'active'
                },
                { 
                    name: 'Fred',
                    lastPlayedCard: null,
                    currentCards: [],
                    playedCards: [],
                    status: 'active'
                },
                { 
                    name: 'Aldrick',
                    lastPlayedCard: null,
                    currentCards: [],
                    playedCards: [],
                    status: 'turn'
                }
            ],
            deck : [],
            playedCards : []
        };
        this.handleDealClicked = this.handleDealClicked.bind(this);
    }

    start() {
        this.setState({ isRunning: true});

        this.shuffleDeck();
        // this.setupFakeData();
    }

    componentDidMount() {
        this.start();
    }

    setupFakeData() {
        let newState = this.state;
        
        newState.players[0].playedCards.push(this.nextCard());
        newState.players[0].playedCards.push(this.nextCard());
        newState.players[1].playedCards.push(this.nextCard());
        newState.players[1].playedCards.push(this.nextCard());
        newState.players[2].currentCards.push(this.nextCard());
        newState.players[2].currentCards.push(this.nextCard());

        this.setState({players: newState.players});
    }

    nextCard() {
        let newState = this.state;
        let card = newState.deck.pop();
        // console.log(card);
        this.setState({deck: newState.deck});
        return card;
    }

    shuffleDeck() {
        let deckCards = [
            { 
                id: '1_1',
                number: 1,
                playable: true
            },
            { 
                id: '1_2',
                number: 1,
                playable: true
            },
            { 
                id: '1_3',
                number: 1,
                playable: true
            },
            { 
                id: '1_4',
                number: 1,
                playable: true
            },
            { 
                id: '1_5',
                number: 1,
                playable: true
            },
            { 
                id: '2_1',
                number: 2,
                playable: true
            },
            { 
                id: '2_2',
                number: 2,
                playable: true
            },
            { 
                id: '3_1',
                number: 3,
                playable: true
            },
            { 
                id: '3_2',
                number: 3,
                playable: true
            },
            { 
                id: '4_1',
                number: 4,
                playable: true
            },
            { 
                id: '4_2',
                number: 4,
                playable: true
            },
            { 
                id: '5_1',
                number: 5,
                playable: true
            },
            { 
                id: '5_2',
                number: 5,
                playable: true
            },
            { 
                id: '6_1',
                number: 6,
                playable: true
            },
            { 
                id: '7_1',
                number: 7,
                playable: true
            },
            { 
                id: '8_1',
                number: 8,
                playable: true
            }
        ];

        let i = deckCards.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deckCards[i];
            deckCards[i] = deckCards[j];
            deckCards[j] = temp;
        }
        deckCards.pop(); // Remove one card randomly

        this.setState({deck: deckCards});
    }

    renderCard(card) {
        return (
            <Card playable={card.playable} number={card.number} key={card.id}></Card>
        );
    }

    render() {

        if(this.state.isRunning) {
            return (
                <div>
                    <h1>Love Letter</h1>
                    <h2>Players</h2>
                    <div className="players">
                        {this.renderPlayerList(this.state.players)}
                    </div>
                    <h2>Deck Cards</h2>
                    <div className="deck">
                        {this.renderCards(this.state.deck)}
                    </div>
                    <h2>Played Cards</h2>
                    <div className="cardList">
                        {this.renderCards(this.state.playedCards)}
                    </div>
                    <button key='dealButton' onClick={this.handleDealClicked}>Deal!</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Else!</h1>
                </div>
            )
        }
    }  

    renderPlayerList(players) {
        let listitems = [];
    
        for(const player of players) {
            listitems.push(
                <Player isCurrentPlayer={player.name == 'Aldrick'} key={player.name} name={player.name} currentCards={player.currentCards} playedCards={player.playedCards} status={player.status} handleAddPlayer={this.handleAddPlayer}></Player>
            );
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

    // #region Events
    handleAddPlayer(e) {

    }

    handleDealClicked(e) {
        // console.log('state here: ', this.state);
        this.setupFakeData();
    }
    // #endregion
}  
