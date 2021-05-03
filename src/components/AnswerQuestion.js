import React from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/shared'
import { withRouter } from 'react-router-dom'

class AnswerQuestion extends React.Component {
    state = {
        selected: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        const { question, authedUser } = this.props
        const { selected } = this.state

        this.props.handleSubmitAnswer(question.id, selected, authedUser).then((resp) => {
            this.props.history.push(`/question/votes/${question.id}`)
        })
    }
    handleChange = (e) => {
        this.setState({ selected: e.target.value })
    }

    render() {
        const { question } = this.props

        return (
            <div>
                <div>
                    <img src={question.author.avatarURL}
                        alt='' height='50' />
                </div>
                <div>{question.author.name} Asks:</div>
                <div>Would you rather ...</div>
                <form>
                    <input type="radio" id="optionOne" name={question.id} value="optionOne"
                        checked={this.state.selected === 'optionOne'}
                        onChange={this.handleChange} />
                    <label htmlFor="optionOne">{question.optionOne?.text}</label><br />
                    <input type="radio" id="optionTwo" name={question.id} value="optionTwo"
                        checked={this.state.selected === 'optionTwo'}
                        onChange={this.handleChange} />
                    <label htmlFor="optionTwo">{question.optionTwo?.text}</label><br />
                    <button onClick={this.handleClick}
                        disabled={this.state.selected === ''}>
                        Submit
                    </button>
                </form>
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
const mapDispatchToProps = {
    handleSubmitAnswer
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion))
