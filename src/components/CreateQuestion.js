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
            // Todo: if failed return the value in inputs
        }
    }
    render() {
        return (
            <div>
                <div>Create New Question</div>

                <div>Complete the question</div>

                <div>Would you rather:</div>

                <form>
                    <input type="text" name="Option1"
                        value={this.state.Option1}
                        placeholder="Enter Option 1 Text Here"
                        onChange={this.handleChange} />

                    <div>OR</div>

                    <input type="text" name="Option2"
                        value={this.state.Option2}
                        placeholder="Enter Option 2 Text Here"
                        onChange={this.handleChange} />

                    {this.state.showError &&
                        <div>Please, fill both the two options</div>
                    }

                    <div>
                        <button onClick={this.handleClick}>Submit</button>
                    </div>
                </form>
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
