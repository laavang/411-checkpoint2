import { connect } from 'react-redux'
import LeafletMap from '../components/LeafletMap'
import { generateMap } from '../redux/actions'

    const mapStateToProps = (state) => {
        return {
                map: state.map
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            generateMap: (address) => dispatch(generateMap(address))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap)