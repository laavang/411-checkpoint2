import { connect } from 'react-redux'
    import LoggedInBar from '../components/LoggedInBar'

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.isLoggedIn,
            user: state.user
        }
    }

    export default connect(mapStateToProps)(LoggedInBar)