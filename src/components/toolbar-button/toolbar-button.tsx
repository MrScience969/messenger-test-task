import React from 'react';
import './toolbar-button.css';

type ToolbarButtonProps = {
  toolbarName: string;
  toolbarImg: string;
  onClick?: () => void;
}

function ToolbarButton({toolbarName, toolbarImg, onClick}: ToolbarButtonProps): JSX.Element {

    return (
      <button
        type="button"
        className={`toolbar-button ${toolbarName}`}
        onClick={onClick}
      >
        <img src={toolbarImg} alt={toolbarName} width="20" height="20"/>
      </button> 
    );
}

export default ToolbarButton;