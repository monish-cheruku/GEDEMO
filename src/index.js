import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { registerLicense } from '@syncfusion/ej2-base';
const root = ReactDOM.createRoot(document.getElementById('root'));

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFac19JXGNWfFJpR2NbfU5xflVPalhRVBYiSV9jS3xTf0dhWX1deHVTQWlUVg==');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
