import React from 'react';
import PropTypes from 'prop-types';
import './Notes.css';
import { connect } from 'react-redux';
import { notes as notesActions } from '../../actions';
import NotesListItem from '../NotesListItem';

class Notes extends React.Component {
  constructor() {
    super();
    const pathValue = window.location.pathname.replace('/', '');
    let activeNoteIndex = 0;
    if (pathValue) {
      activeNoteIndex = parseInt(pathValue, 10) - 1
      if (isNaN(activeNoteIndex)) {
        activeNoteIndex = undefined;
      }
    }
    this.state = {
      activeNoteIndex
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  componentDidMount() {
    const { initialze } = this.props;
    initialze();
  }

  onListItemClick(index) {
    const { history } = this.props;
    this.setState({
      activeNoteIndex: index
    },
    () => {
      history.push(`/${index + 1}`);
    });
  }

  render() {
    const { notes } = this.props;
    const { activeNoteIndex } = this.state;
    const invalid = typeof activeNoteIndex === 'undefined' || activeNoteIndex < 0 || activeNoteIndex > notes.length - 1;
    const activeNote = notes.length ? notes[activeNoteIndex] : undefined;
    return (
      <div className="notes-container">
        <div className="notes-list">
          {
            notes.map((note, index) => (
              <NotesListItem
                key={note.id}
                note={{ ...note, index }}
                active={!invalid && index === activeNoteIndex}
                onItemClick={this.onListItemClick}
              />
            ))
          }
          {!notes.length && (
            <NotesListItem
              note={{
                value: 'No notes yet'
              }}
            />
          )}
        </div>
        <div className="note-editor">
          {!invalid && activeNote ? activeNote.value : ''}
          {invalid ? 'INVALID ROUTE' : ''}
        </div>
      </div>
    );
  }
}

Notes.propTypes = {
  initialze: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  initialze: () => dispatch(notesActions.initializeNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
