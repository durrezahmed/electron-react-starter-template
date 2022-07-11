import React from 'react';

export default function App() {
  return (
    <>
      <h1>Start Building your Electron App</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}
      >
        Notify
      </button>
    </>
  );
}
