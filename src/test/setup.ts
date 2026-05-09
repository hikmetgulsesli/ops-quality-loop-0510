import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toBeDisabled(): R;
  toBeEnabled(): R;
  toBeVisible(): R;
  toHaveTextContent(text: string | RegExp): R;
  toHaveValue(value: string | string[]): R;
  toHaveAttribute(attr: string, value?: string): R;
  toHaveClass(...classNames: string[]): R;
  toBeChecked(): R;
}

afterEach(() => {
  cleanup();
});
