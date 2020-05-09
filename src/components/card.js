import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classname = 'card ' + this.getClassForCardNumber(this.props.number);
        if(!this.props.playable) {
            classname += ' disabled';
        }
        return (
            <div className={classname}></div>
        );
    }

    getClassForCardNumber(number) {
        let classname = '';
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