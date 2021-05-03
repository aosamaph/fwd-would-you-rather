import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/authedUser'

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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/new">New Question</Nav.Link>
                    <Nav.Link href="/leaderBoard">Leader Board</Nav.Link>
                    {!authedUser &&
                        <Nav.Link href="/login">Login</Nav.Link>
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
