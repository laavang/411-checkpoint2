import { connect } from 'react-redux'
import LeafletMap from '../components/LeafletMap'

    const mapStateToProps = (state) => {
        return {
                map: state.map
        }
    }

    export default connect(mapStateToProps)(LeafletMap)