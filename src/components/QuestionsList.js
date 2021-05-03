import React from 'react'
import QuestionCard from './QuestionCard'

class QuestionsList extends React.Component {

    render() {
        const { questions } = this.props
        return (
            <div>
                {questions.map(q => (
                    <QuestionCard key={q.id} question={q} />
                ))}
            </div>
        )
    }
}

export default QuestionsList
