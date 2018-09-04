import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import './styles.css'



const QuoteBox = (props) => {
    return (
        <Card id="quote-box" raised>
            <div className="body">
            <div id="text">{props.quote}</div>
            <div id="author">{props.author}</div>
            </div>
            <div className="footer">
            <Button variant="contained" color="primary" onClick={props.random}> New quote</Button>
            <Button variant="outlined"> Tweet quote</Button>
            </div>
        </Card>
    )
}

export default QuoteBox;
