import React from 'react'
import { withRouter } from 'react-router-dom'

class QuestionCard extends React.Component {
    handleClick = () => {

        const { question, history } = this.props
        if (question.isAnswered) {
            history.push(`/question/votes/${question.id}`)
        }
        else {
            history.push(`/question/${question.id}`)
        }
    }
    render() {
        const { question } = this.props
        return (
            <div>
                <img src={question.author.avatarURL}
                    alt='' height='50' />
                <div>{question.author.name} Asks</div>
                <div>Would You Rather</div>
                <div>{question.optionOne.text} OR {question.optionTwo.text}</div>
                <button onClick={this.handleClick}>View Poll</button>
            </div>
        )
    }
}

export default withRouter(QuestionCard)
