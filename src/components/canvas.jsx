import React from 'react';
import ReactMarkdown from 'react-markdown';
// import FontAwesomeIcon from '@fortawesome/fontawesome-free';

const CanvasComponent = (props) => {
  const [editCommentValue, setEditCommentValue] =
    React.useState('# Placeholder');

  const [focused, setFocused] = React.useState(true);
  const onFocus = () => setFocused(true);
  const notOnFocus = () => setFocused(false);

  const handleTextInput = (event: any) => {
    setEditCommentValue(event.target.value);
  };

  console.log(focused);

  const canvasContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '60vw',
    height: '90vh',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
    border: '1px double rgba(0, 0, 0, 0.55)',
  };

  if (focused) {
    return (
      <div>
        <textarea
          style={canvasContainerStyle}
          onChange={handleTextInput}
          onFocus={onFocus}
          onBlur={notOnFocus}
        >
          {editCommentValue}
          {/* <FontAwesomeIcon icon={'dog'} /> */}
        </textarea>
      </div>
    );
  }

  return (
    <div onFocus={onFocus} onBlur={notOnFocus} onClick={onFocus}>
      <ReactMarkdown>{editCommentValue}</ReactMarkdown>
    </div>
  );
};

export default CanvasComponent;
