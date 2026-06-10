/// <reference types="vite/client" />

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

export {};
