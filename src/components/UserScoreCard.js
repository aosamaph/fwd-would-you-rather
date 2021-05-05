import React from 'react'

class UserScoreCard extends React.Component {

    render() {
        const { user, ranking } = this.props
        let answersCount = Object.keys(user.answers).length
        let questionsCount = user.questions.length
        return (
            <div className='card m-2'>
                <div className='position-fixed font-weight-bold'>{ranking}</div>
                <div className='card-body row'>
                    <div className='col-3 border-right text-center'>
                        <img src={user.avatarURL}
                            alt='' height='100' />
                    </div>
                    <div className='col-6'>
                        <h4 className='card-title'>{user.name}</h4>
                        <div className='row mb-2'>
                            <div className='col-9'>Answered Questions: </div>
                            <div className='col-3 text-right'>{answersCount}</div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-9'>Created Questions: </div>
                            <div className='col-3 text-right'>{questionsCount}</div>
                        </div>
                    </div>
                    <div className='col-3 border-left text-center'>
                        <div className='card border-success'>
                            <div className='card-header font-weight-bold'>Score</div>
                            <div className='card-body text-success font-weight-bold'>{answersCount + questionsCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserScoreCard