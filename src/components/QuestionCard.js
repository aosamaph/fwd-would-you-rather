import React from 'react'

class QuestionCard extends React.Component {
    handleClick = () => {
        const { question } = this.props
        // Todo: redirect based on q.isAnswered
        if (question.isAnswered) { }
        else { }
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

export default QuestionCard
