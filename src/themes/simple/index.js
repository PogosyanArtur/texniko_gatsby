import {
    createMuiTheme
} from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import transitions from './transitions'
import zIndex from './zIndex'
import spacing from './spacing'
import shape from './shape'

export default createMuiTheme({
    typography,
    breakpoints,
    transitions,
    zIndex,
    spacing,
    shape,
    palette,
})