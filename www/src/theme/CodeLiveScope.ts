import * as React from 'react';
import ReactDOM from 'react-dom';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ReactDOM,
};

delete (ReactLiveScope as any).default;

export default ReactLiveScope;
