import { ErrorBoundary, FallbackView } from 'react-error-boundaries'
import { hocCreator } from '../helpers/hoc'

export default hocCreator(ErrorBoundary, { FallbackComponent: FallbackView });
