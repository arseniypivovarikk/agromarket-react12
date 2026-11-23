import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { server } from './server.js';
beforeAll(()=>server.listen({onUnhandledRequest:'warn'}));
afterEach(()=>{server.resetHandlers();cleanup();localStorage.clear();});
afterAll(()=>server.close());
