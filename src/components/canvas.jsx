import React from 'react';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free';

const CanvasComponent = (props) => {
  const [editCommentValue, setEditCommentValue] =
    React.useState('#Placeholder');
  const [editing, setEditing] = React.useState(false);

  const handleTextInput = (event: any) => {
    setEditing(true);
    setEditCommentValue(event.target.value);
  };

  const canvasContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '60vw',
    height: '90vh',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
    border: '1px double rgba(0, 0, 0, 0.55)',
  };

  return (
    <div>
      <textarea style={canvasContainerStyle} onChange={handleTextInput}>
        {editCommentValue}
        {/* <FontAwesomeIcon icon={'dog'} /> */}
      </textarea>
    </div>
  );
};

export default CanvasComponent;
