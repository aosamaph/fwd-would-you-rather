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
            <div className='card m-2'>
                <h5 className='card-header text-center'>{question.author.name} Asks</h5>
                <div className='card-body row'>

                    <div className='col-4 text-center border-right'>
                        <img
                            src={question.author.avatarURL}
                            alt='' height='100' />
                    </div>
                    <div className='col-8 p-2'>
                        <div className='h5'> Would You Rather</div>
                        <div className='p-2'>...{question.optionOne.text}</div>
                        <button className='btn btn-outline-info w-100'
                            onClick={this.handleClick}>View Poll</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuestionCard)
