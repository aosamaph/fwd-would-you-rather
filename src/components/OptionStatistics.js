import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

class OptionStatistics extends React.Component {
    render() {
        const { option, totalVotes, isMyOption } = this.props
        const optionVotes = option.votes.length
        const now = (optionVotes / totalVotes * 100).toFixed(2)

        return (
            <div className={`card mb-2 ${isMyOption ? 'border-success' : ''}`}>
                {isMyOption &&
                    <div className='text-success font-weight-bold position-absolute'>Your Vote</div>
                }
                <div className='card-body mt-2'>

                    <div className={`card-title font-weight-bold ${isMyOption ? 'text-success' : ''}`}>Would you rather {option.text}?</div>
                    <ProgressBar striped variant={isMyOption ? 'success' : 'info'}
                        now={now}
                        label={`${now}%`} />
                </div>
                <div className='card-footer w-100'>
                    <div className='text-center font-weight-bold'>{optionVotes} out of {totalVotes} votes</div>
                </div>
            </div>
        )
    }
}

export default OptionStatistics