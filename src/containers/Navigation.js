import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { logIn } from '../redux/actions'

    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            logIn: (user) => dispatch(logIn(user))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
