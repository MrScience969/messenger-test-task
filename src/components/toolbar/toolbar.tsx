import React from 'react';
import './toolbar.css';

type ToolbarProps = {
  title: string;
  leftItems: JSX.Element[]; 
  rightItems: JSX.Element[]; 
}

function Toolbar({title, leftItems, rightItems }: ToolbarProps): JSX.Element {

    return (
      <div className="toolbar">
        <div className="left-items">{ leftItems }</div>
        <h1 className="toolbar-title">{ title }</h1>
        <div className="right-items">{ rightItems }</div>
      </div>
    );
}

export default Toolbar;