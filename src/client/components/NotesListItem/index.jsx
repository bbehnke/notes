import React from 'react';
import PropTypes from 'prop-types';
import './NotesListItem.css';

class NotesListItem extends React.PureComponent {
  render() {
    const { note, active, onItemClick } = this.props;
    return (
      <div onClick={() => onItemClick(note.index)}>
        {`${note.value} ${active}`}
      </div>
    );
  }
}

NotesListItem.defaultProps = {
  active: false,
  onItemClick: () => {}
};

NotesListItem.propTypes = {
  note: PropTypes.shape({
    index: PropTypes.number,
    value: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.bool,
  onItemClick: PropTypes.func
};

export default NotesListItem;
