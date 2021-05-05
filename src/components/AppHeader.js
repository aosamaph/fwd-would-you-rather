import React, { Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/authedUser'
import { withRouter, Link } from 'react-router-dom'


class AppHeader extends React.Component {
    handleClick = () => {
        const { logout } = this.props
        logout()

        this.props.history.push('/')
    }

    render() {
        const { authedUser } = this.props

        return (
            <Navbar className='border-bottom mb-2'>
                <Navbar.Brand >Would You Rather</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/add" className='nav-link'>New Poll</Link>
                    <Link to="/leaderBoard" className='nav-link'>Leader Board</Link>
                    {/* {!authedUser.id &&
                        <Link to="/login" className='nav-link'>Login</Link>
                    } */}
                </Nav>
                {!authedUser.id &&
                    <Link to="/login" className='btn btn-outline-success'>Login</Link>
                }
                {authedUser.id &&
                    <Fragment>

                        <div>
                            <img src={authedUser.avatarURL}
                                alt={`${authedUser.name}'s avatar`} height='30' />
                        </div>
                        <div className='mr-2 ml-2 text-success'>Hello {authedUser.name}!</div>

                        <button className='btn btn-outline-secondary'
                            onClick={this.handleClick}

                        >Logout</button>
                    </Fragment>
                }
            </Navbar>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser: { ...users[authedUser] }
})
const mapDispatchToProps = {
    logout
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader))
