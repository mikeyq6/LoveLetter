import React from 'react'

import Card from './card'

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        console.log('player mount');
    }

    render() {
        if(this.props.isCurrentPlayer && this.props.status == 'turn') {
            return (
                <div className="player current">
                    <p>Your turn - select a card to play</p>
                    <div className="deck">
                        {this.renderCards(this.props.currentCards)}
                    </div>
                </div>
            );
        } else if(this.props.isCurrentPlayer) {
            return (
                <div className="player">
                    <p>My Card</p>
                    <div className="deck">
                        {this.renderCards(this.props.currentCards)}
                    </div>
                </div>
            );
        } else if(this.props.name == 'Aldrick') {
            return (
                <div className="currentPlayer">
                    <input name="playerName" defaultValue={this.props.name} />
                    <button onClick={this.props.handleAddPlayer}>Add Player</button>
                </div>
            );
        } else {
            return (
                <div className="player">
                    <p>{this.props.name}</p>
                    <h3>Played cards:</h3>
                    <div className="deck">
                        {this.renderCards(this.props.playedCards)}
                    </div>
                </div>
            );
        }
    }

    renderCards(cards) {
        let carditems = [];
        // console.log('Plyaer: ' + this.props.name + 'cards: ', cards);

        for(const card of cards) {
            // console.log(card);
            carditems.push(<Card playable={this.props.isCurrentPlayer && this.props.status == 'turn'} number={card.number} key={card.id}></Card>);
        }

        return carditems;
    }
}