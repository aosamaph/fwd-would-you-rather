import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { DropdownButton } from 'react-bootstrap'
import { login } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    state = {
        selectedName: 'Select User',
        selectedID: ''
    }

    handleSelect = (key, e) => {
        this.setState({
            selectedName: e.target.text,
            selectedID: key
        })
    }

    handleClick = (e) => {
        const { selectedID } = this.state
        const { login } = this.props

        login(selectedID)
        this.props.history.push('/')
    }

    render() {
        const { users } = this.props
        return (
            <div className='card'>
                <div className='card-header text-center'>
                    <h5>Welcome to the Would You Rather App!</h5>
                    <span className='text-secondary'>Please sign in to continue</span>
                </div>
                <div className='card-body text-center'>
                    <div>
                        <img src='https://www.logolynx.com/images/logolynx/80/801614bad4ce983db96dc6e07b22ac0f.png'
                            alt='App Logo'
                            height='150'></img>
                    </div>
                    <h4 className='text-success display-4 font-weight-bold'>Sign In</h4>
                    <div className='form-group'>
                        <DropdownButton
                            title={this.state.selectedName} variant='secondary' >
                            {map(users, (u) => {
                                return (
                                    <Dropdown.Item key={u.id} eventKey={u.id}
                                        onSelect={this.handleSelect}>{u.name}</Dropdown.Item>
                                )
                            })}
                        </DropdownButton>
                    </div>
                    <button className='btn btn-success'
                        onClick={this.handleClick}
                        disabled={this.state.selectedID === ''}
                    >Sign In</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = {
    login
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
