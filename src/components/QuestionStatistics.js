import { includes } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import OptionStatistics from './OptionStatistics'
import { withRouter } from 'react-router-dom'

class QuestionStatistics extends React.Component {

    render() {
        const { question, authedUser } = this.props
        const totalVotes = question.optionOne?.votes.length + question.optionTwo?.votes.length

        return (
            <div className='card'>

                <h5 className='card-header'>Asked by {question.author.name}</h5>
                <div className='card-body row'>
                    <div className='col-4 text-center border-right'>
                        <img src={question.author.avatarURL}
                            alt='' height='100' />
                    </div>
                    <div className='col-8'>
                        <h4 className='card-title'>Results:</h4>
                        {question.optionOne &&
                            <OptionStatistics
                                option={question.optionOne}
                                totalVotes={totalVotes}
                                isMyOption={includes(question.optionOne?.votes, authedUser)} />}
                        {question.optionTwo &&
                            <OptionStatistics
                                option={question.optionTwo}
                                totalVotes={totalVotes}
                                isMyOption={includes(question.optionTwo?.votes, authedUser)} />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { users, questions, authedUser } = state

    let qid = props.match.params.id
    return {
        question: {
            ...questions[qid],
            author: {
                name: users[questions[qid]?.author]?.name,
                avatarURL: users[questions[qid]?.author]?.avatarURL,
            }
        },
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionStatistics))
