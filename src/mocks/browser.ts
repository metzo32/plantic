// import { setupWorker } from "msw/browser";
// import { http, HttpHandler } from "msw";
// import { handlers } from "./handlers";

// // handlers를 HttpHandler[]에서 RequestHandler[]로 변환
// const workerHandlers = handlers as unknown as Parameters<typeof setupWorker>;

// export const worker = setupWorker(...workerHandlers);


// src/mocks/browser.js

import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)
