import React from 'react';
import { EmailForm } from './components/EmailForm';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">AI Email Marketing Platform</h1>
      <EmailForm />
      <Dashboard />
    </div>
  );
}

export default App;
