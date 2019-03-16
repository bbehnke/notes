import { put } from 'redux-saga/effects';
import { getNotes } from '../fetches';
import { notes as noteActions } from '../actions';

export default function* initializeNotes() {
  try {
    // TODO set loading true
    const {
      data,
      error
    } = yield getNotes();

    if (error) {
      // TODO add error handling/logging
      console.error(error);
      return;
    }

    yield put(noteActions.setNotes(data));
  } catch (e) {
    // TODO add error handling/logging
    console.error(e);
  } finally {
    // TODO set loading false
  }
}
