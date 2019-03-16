import { takeLatest, all } from 'redux-saga/effects';
import initializeNotes from './initializeNotes';

export default function* watcherSaga() {
  yield all([
    yield takeLatest('INITIALIZE_NOTES', initializeNotes),
  ]);
}
