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
            <div className='card m-2'>
                <h5 className='card-header'>{question.author.name} Asks:</h5>
                <div className='card-body row'>

                    <div className='col-4 text-center border-right'>
                        <img src={question.author.avatarURL}
                            alt='' height='100' />
                    </div>
                    <div className='col-8'>

                        <div className='card-title'>Would you rather ...</div>
                        <form>
                            <div className='form-group'>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                        type="radio" id="optionOne" name={question.id} value="optionOne"
                                        checked={this.state.selected === 'optionOne'}
                                        onChange={this.handleChange} />
                                    <label className='form-check-label' htmlFor="optionOne">{question.optionOne?.text}</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input'
                                        type="radio" id="optionTwo" name={question.id} value="optionTwo"
                                        checked={this.state.selected === 'optionTwo'}
                                        onChange={this.handleChange} />
                                    <label className='form-check-label' htmlFor="optionTwo">{question.optionTwo?.text}</label><br />
                                </div>
                            </div>
                            <button className='btn btn-success w-100'
                                onClick={this.handleClick}
                                disabled={this.state.selected === ''}>
                                Submit</button>
                        </form>
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
const mapDispatchToProps = {
    handleSubmitAnswer
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion))
