import React from 'react';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';

const handleCommentChange = (event: any) => {
  setEditCommentValue(event.target.value);
};

const CanvasComponent = (props) => {
  const canvasContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '10vw',
    height: '9vh',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
    border: '1px double rgba(0, 0, 0, 0.55)',
  };

  return (
    <div>
      <div style={canvasContainerStyle}>
        {'TESTESTEST'}
        <FontAwesomeIcon icon={'dog'} />
      </div>
    </div>
  );
};

export default CanvasComponent;
