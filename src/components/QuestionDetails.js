import { includes } from 'lodash-es'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import AnswerQuestion from './AnswerQuestion'
import QuestionStatistics from './QuestionStatistics'

class QuestionDetails extends React.Component {
    isAnswered = (q) => {
        const { authedUser } = this.props
        return includes(q.optionOne.votes, authedUser) || includes(q.optionTwo.votes, authedUser)
    }
    render() {
        const { question } = this.props
        console.log(question)
        if (!question.id)
            return (<Redirect to='/NotFound'></Redirect>)
        return (
            <div>
                {this.isAnswered(question) ?
                    <QuestionStatistics /> : <AnswerQuestion />

                }
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
export default connect(mapStateToProps)(QuestionDetails)