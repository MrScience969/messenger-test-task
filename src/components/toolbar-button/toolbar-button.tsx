import React from 'react';
import './toolbar-button.css';

type ToolbarButtonProps = {
  icon: string;
}

function ToolbarButton({icon}: ToolbarButtonProps): JSX.Element {

    return (
      <i className={`toolbar-button ${icon}`} />
    );
}

export default ToolbarButton;