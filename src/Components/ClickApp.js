import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import ImageCard from './ClickGame/ImageCard';
import Footer from './Footer/Footer';
import AppBar from './Header/AppBar';

class ClickApp extends Component {
    constructor(props) {
        super(props);

        let cards = [
            {id: 0, clicked: false, source: 'babyGroot'},
            {id: 1, clicked: false, source: 'drax'},
            {id: 2, clicked: false, source: 'ego'},
            {id: 3, clicked: false, source: 'gamorra'},
            {id: 4, clicked: false, source: 'goldLady'},
            {id: 5, clicked: false, source: 'mantis'},
            {id: 6, clicked: false, source: 'nebula'},
            {id: 7, clicked: false, source: 'rocket'},
            {id: 8, clicked: false, source: 'starLord'},
            {id: 9, clicked: false, source: 'yondu'}
        ];
        cards = shuffle(cards);
        this.state = {cards, score: 0, topScore: 0};
        console.log(this.state);

        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleNewGame() {
        let cards = this.state.cards.map(c => ({
            ...c,
            clicked: false,
        }));
        let topScore = this.state.topScore;
        cards = shuffle(cards);
        this.setState({cards, score: 0, topScore: topScore});
    }

    handleClick(id) {
        const mapCardState = (cards, idToChange) => {
            return cards.map(c => {
                if (idToChange === c.id) {
                    return {
                        ...c,
                        clicked: true
                    };
                }
                return c;
            });
        };

        const clickedCard = this.state.cards.find(c => c.id === id);
        let score = this.state.score;
        let topScore = this.state.topScore;

        if(clickedCard.clicked) {
            alert('Sorry, that has already been clicked');
            this.handleNewGame();
        } else {
            score++;
            if(score > topScore) {
                topScore = score;
            }
            let cards = mapCardState(this.state.cards,id);
            cards = shuffle(cards);
            this.setState({cards, score: score, topScore: topScore});

        }
    }




    render() {
        const cards = this.state.cards.map((card) => (
            <ImageCard
                key={card.id}
                image={require(`../img/${card.source}.jpg`)}
                onClick={() => this.handleClick(card.id)}
            />
        ));
        return (
            <div>
                <AppBar score={this.state.score} topScore={this.state.topScore}/>
                <br/>
                <div className='container'>
                    <div className='row'>
                    {cards}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default ClickApp;