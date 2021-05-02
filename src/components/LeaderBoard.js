import { map, sortBy } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import UserScoreCard from './UserScoreCard'

class LeaderBoard extends React.Component {

    render() {
        const { users } = this.props
        return (
            <div>
                {map(users, (u, i) => {
                    console.log('user to userScoreCard', u);
                    return <UserScoreCard key={u.id} user={u} ranking={i + 1} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: sortBy(state.users, (user) => {
        let answersCount = Object.keys(user.answers).length
        let questionsCount = user.questions.length
        return answersCount + questionsCount
    }).reverse()
})

export default connect(mapStateToProps)(LeaderBoard)
