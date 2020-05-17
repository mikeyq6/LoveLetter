import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        // console.log('constructor', props);
        super(props);

        this.state = {
            isToggleOn : false
        };
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    render() {
        // console.log('props: ', this.props);
        // console.log('state: ', this.state);
        let classname = 'card ';
        classname += this.getClassForCardNumber(this.props.number);
        if(this.state.isToggleOn) {
            classname += ' selected';
        }
        if(this.props.playable) {
            return (
                <div className={classname} key={this.props.id} onClick={this.handleCardClick}></div>
            );
        } else {
            classname += ' disabled';
            return (
                <div className={classname} key={this.props.id}></div>
            );
        }
    }

    handleCardClick(e) {
        let newState = this.state;
        newState.isToggleOn = !this.state.isToggleOn;
        this.setState(newState);
    }

    getClassForCardNumber(number) {
        let classname = '';
        // console.log(number);
        switch(number) {
            case 1:
                classname = 'c_guard'; break;
            case 2:
                classname = 'c_priest'; break;
            case 3:
                classname = 'c_baron'; break;
            case 4:
                classname = 'c_handmaid'; break;
            case 5:
                classname = 'c_prince'; break;
            case 6:
                classname = 'c_king'; break;
            case 7:
                classname = 'c_countess'; break;
            case 8:
                classname = 'c_princess'; break;
        }

        return classname;
    }
}