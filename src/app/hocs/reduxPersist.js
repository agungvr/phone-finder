import { PersistGate } from 'redux-persist/integration/react'
import { hocCreator } from '../helpers/hoc'
import { persistor } from './redux';

export default hocCreator(PersistGate, { loading: null, persistor: persistor });
