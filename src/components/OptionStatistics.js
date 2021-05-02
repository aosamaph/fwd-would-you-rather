import React from 'react'

class OptionStatistics extends React.Component {
    render() {
        const { option, totalVotes, isMyOption } = this.props
        return (
            <div>
                {isMyOption &&
                    <div>Your Vote</div>
                }
                <div>Would you rather {option.text}</div>
                <div>{option.votes.length} out of {totalVotes} votes</div>
            </div>
        )
    }
}

export default OptionStatistics