import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/authedUser'
import { Link } from 'react-router-dom'

class AppHeader extends React.Component {
    handleClick = () => {
        const { logout } = this.props
        logout()
        // Todo: redirect to home
    }

    render() {
        const { authedUser } = this.props
        return (
            <Navbar>
                <Navbar.Brand >Would You Rather</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/new" className='nav-link'>New Question</Link>
                    <Link to="/leaderBoard" className='nav-link'>Leader Board</Link>
                    {!authedUser &&
                        <Link to="/login" className='nav-link'>Login</Link>
                    }
                </Nav>
                {authedUser &&
                    <Button className='btn-secondary'
                        onClick={this.handleClick}
                    >Logout</Button>
                }
            </Navbar>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
