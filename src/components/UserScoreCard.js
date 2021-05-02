import React from 'react'

class UserScoreCard extends React.Component {

    render() {
        const { user, ranking } = this.props
        let answersCount = Object.keys(user.answers).length
        let questionsCount = user.questions.length
        return (
            <div>
                <div>{ranking}</div>
                <div>
                    <img src={user.avatarURL}
                        alt='' height='50' />
                </div>
                <div>{user.name}</div>
                <div>
                    <div>Answered Questions: </div>
                    <div>{answersCount}</div>
                </div>
                <div>
                    <div>Created Questions: </div>
                    <div>{questionsCount}</div>
                </div>
                <div>
                    <div>Score</div>
                    <div>{answersCount + questionsCount}</div>
                </div>
            </div>
        )
    }
}

export default UserScoreCard