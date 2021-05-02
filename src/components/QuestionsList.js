import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import QuestionCard from './QuestionCard'
import { handleInitialData } from '../actions/shared'

class QuestionsList extends React.Component {
    componentDidMount() {
        const { handleInitialData } = this.props
        handleInitialData()
    }
    render() {
        const { questions, users } = this.props
        return (
            <div>
                {_.map(questions, (q) => {
                    q = { ...q }
                    q.author = {
                        name: users[q.author].name,
                        avatarURL: users[q.author].avatarURL
                    }
                    return (
                        <QuestionCard key={q.id} question={q} onClick={() => { }} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.questions,
    users: state.users
})

const mapDispatchToProps = {
    handleInitialData,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
