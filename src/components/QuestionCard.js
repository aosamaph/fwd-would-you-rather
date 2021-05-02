import React from 'react'

class QuestionCard extends React.Component {

    render() {
        const { question, onClick } = this.props
        return (
            <div>
                <img src={question.author.avatarURL}
                    alt='' height='50' />
                <div>{question.author.name} Asks</div>
                <div>Would You Rather</div>
                <div>{question.optionOne.text} OR {question.optionTwo.text}</div>
                <button onClick={() => { onClick() }}>View Poll</button>
            </div>
        )
    }
}

export default QuestionCard