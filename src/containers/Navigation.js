import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { logIn } from '../redux/actions'
import { logOut } from '../redux/actions'

    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            logIn: (user) => dispatch(logIn(user)),
            logOut: () => dispatch(logOut())
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
