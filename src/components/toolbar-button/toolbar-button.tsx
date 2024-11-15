import React from 'react';
import './toolbar-button.css';

type ToolbarButtonProps = {
  toolbarName: string;
  toolbarImg: string;
}

function ToolbarButton({toolbarName, toolbarImg}: ToolbarButtonProps): JSX.Element {

    return (
      <button type="button" className={`toolbar-button ${toolbarName}`}>
        <img src={toolbarImg} alt={toolbarName} width="20" height="20"/>
      </button> 
    );
}

export default ToolbarButton;