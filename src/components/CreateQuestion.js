import React from "react"
import { connect } from "react-redux"
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class CreateQuestion extends React.Component {
    state = {
        Option1: "",
        Option2: "",
        showError: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let { Option1, Option2 } = this.state
        let { authedUser } = this.props

        if (Option1.trim() === "" || Option2.trim() === "") {
            this.setState({ showError: true })
        }
        else {
            let question = {
                optionOneText: Option1,
                optionTwoText: Option2,
                author: authedUser
            }
            this.setState({
                Option1: "",
                Option2: "",
                showError: false
            })

            this.props.handleAddQuestion(question).then(
                (res) => {
                    this.props.history.push('/')
                }
            )
        }
    }
    render() {
        return (
            <div className='card m-2'>
                <div className='card-header h5 text-center'>Create New Question</div>

                <div className='card-body'>

                    <h5 className='card-title'>Complete the question:</h5>

                    <p className='card-text'>Would you rather...</p>

                    <form>
                        <div className='form-group'>
                            <input className='form-control'
                                type="text" name="Option1"
                                value={this.state.Option1}
                                placeholder="Enter Option 1 Text Here"
                                onChange={this.handleChange} />
                            <div className='text-center'>OR</div>
                            <input className='form-control '
                                type="text" name="Option2"
                                value={this.state.Option2}
                                placeholder="Enter Option 2 Text Here"
                                onChange={this.handleChange} />
                            {this.state.showError &&
                                <div className='text-danger'>Please, fill both the two options</div>
                            }
                        </div>
                        <button className='btn btn-primary w-100' onClick={this.handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authedUser: state.authedUser
})
const mapDispatchToProps = {
    handleAddQuestion
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateQuestion))
