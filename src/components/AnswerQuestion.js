import React from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/shared'

class AnswerQuestion extends React.Component {
    state = {
        selected: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        const { question, authedUser } = this.props
        const { selected } = this.state

        this.props.handleSubmitAnswer(question.id, selected, authedUser).then((resp) => {
            // Todo: redirect to home
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

const mapStateToProps = (state) => {
    const { users, questions, authedUser } = state

    // Todo: remove this id
    let qid = '8xf0y6ziyjabvozdd253nd'
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
export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion)
