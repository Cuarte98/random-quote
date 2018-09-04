import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        { id: 1, quote: 'Nuestra mayor gloria no está en no caer nunca, sino en levantarnos cada vez que caemos.', author: 'Confucio' },
        { id: 2, quote: 'Se necesitan dos años para aprender a hablar, y sesenta para aprender a callar.', author: 'Ernest Hemingway' },
        { id: 3, quote: 'El éxito no se mide en el dinero, sino en la diferencia que marca en las personas.', author: 'Michelle Obama' }
      ],
      currentQuote: {}
    }
  }

  randomQuote = () => {
    let quote
    do{
      quote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    } while(quote.id === this.state.currentQuote.id)
    this.setState({currentQuote: {...quote}})
  }

  componentWillMount(){
    this.randomQuote()
  }
  
  render() {
    const { quote, author } = this.state.currentQuote;
    return (
      <div className="App">
        <QuoteBox random={this.randomQuote} author={author} quote={quote}/>
      </div>
    );
  }
}

export default App;
