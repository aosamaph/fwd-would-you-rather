import { forEach, includes } from 'lodash'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionsList from './QuestionsList'

const unansweredQuestions = 'unansweredQuestions'
const answeredQuestions = 'answeredQuestions'

class Home extends React.Component {
    state = {
        activeTab: unansweredQuestions
    }
    componentDidMount() {
        const { handleInitialData } = this.props
        handleInitialData()
    }
    handleSelect = (key, e) => {
        this.setState({
            activeTab: key
        })
    }

    isAnswered = (q) => {
        const { authedUser } = this.props
        return includes(q.optionOne.votes, authedUser) || includes(q.optionTwo.votes, authedUser)
    }

    getFormatedQuestions = (answered = false) => {
        const { questions, users } = this.props
        let result = []
        forEach(questions, (q) => {
            if (this.isAnswered(q) === answered) {
                const formated = {
                    ...q,
                    author: {
                        name: users[q.author].name,
                        avatarURL: users[q.author].avatarURL
                    },
                    isAnswered: answered
                }
                result = [...result, formated]
            }
        })
        return result
    }


    render() {
        const { activeTab } = this.state

        return (
            <div>

                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey={unansweredQuestions}
                            active={activeTab === unansweredQuestions}
                            onSelect={this.handleSelect}
                        >Unanswered Questions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={answeredQuestions}
                            active={activeTab === answeredQuestions}
                            onSelect={this.handleSelect}
                        >Answered Questions</Nav.Link>
                    </Nav.Item>
                </Nav>

                <QuestionsList questions={this.getFormatedQuestions(activeTab === answeredQuestions)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
    handleInitialData
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)