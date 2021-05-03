import React from 'react'
import logo from '../logo.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { DropdownButton } from 'react-bootstrap'
import { login } from '../actions/authedUser'

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
    }
    render() {
        const { users } = this.props
        return (
            <div>
                <div>Welcome to the Would You Rather App!</div>
                <div>Please sign in to continue</div>
                <div>
                    <img src={logo}
                        alt='App Logo'
                        height='150'></img>
                </div>
                <div>Sign In</div>
                <DropdownButton title={this.state.selectedName} variant='secondary' >
                    {map(users, (u) => {
                        return (
                            <Dropdown.Item key={u.id} eventKey={u.id}
                                onSelect={this.handleSelect}>{u.name}</Dropdown.Item>
                        )
                    })}
                </DropdownButton>
                <Button className='btn btn-primary'
                    onClick={this.handleClick}
                    disabled={this.state.selectedID === ''}
                >Sign In</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
