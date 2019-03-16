// TODO update to be accessible compliant
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import './NoteEditor.css';

const previewLength = 20;

class NoteEditor extends React.PureComponent {
  render() {
    const { note, active, onItemClick } = this.props;
    const preview = note.value.length > 20 ? note.value.slice(0, previewLength) : note.value;
    const classPrefix = 'notes-list-item-';
    return (
      <div
        onClick={() => onItemClick(note.index)}
        className={`${classPrefix}container${active ? ' active' : ''}`}
      >
        <div className={`${classPrefix}id`}>{note.id}</div>
        <div className={`${classPrefix}preview`}>{preview}</div>
      </div>
    );
  }
}

NoteEditor.defaultProps = {
  active: false,
  onItemClick: () => {}
};

NoteEditor.propTypes = {
  note: PropTypes.shape({
    index: PropTypes.number,
    value: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.bool,
  onItemClick: PropTypes.func
};

export default NoteEditor;