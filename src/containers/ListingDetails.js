import { connect } from 'react-redux'
import ListingDetails from '../components/ListingDetails'

    const mapStateToProps = (state) => {
        return {
            listings: state.listings,
            user: state.user
        }
    }

    export default connect(mapStateToProps)(ListingDetails)