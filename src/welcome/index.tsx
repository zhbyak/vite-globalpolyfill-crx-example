import React from 'react';
import { createRoot } from 'react-dom/client';

import Profile from './Profile';

import '../tailwind.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Profile /> */}
    <Wallet />
  </React.StrictMode>
);
