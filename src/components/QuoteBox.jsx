import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Fade from '@material-ui/core/Fade'
import './styles.css'

const QuoteBox = (props) => {
    return (
        <Fade in timeout={1000} >
            <Card id="quote-box" raised>
                <div className="body">
                    <div id="text">{props.quote}</div>
                    <div id="author">{props.author}</div>
                </div>
                <div className="footer">
                    <Button variant="contained" color="primary" onClick={props.random}> New quote</Button>
                    <Button variant="contained" color="secondary"> <a href={props.tweet} target="_blank">Tweet</a></Button>
                </div>
            </Card>
        </Fade>
    )
}

export default QuoteBox;
