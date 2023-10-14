import './mocks';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender, renderHook as rtlRenderHook } from '@testing-library/react';

import { makeStore } from '../src/store';

import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
import type { AppStore, RootState } from '../src/store/types/TStore';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: AppStore
}

function Wrapper({ children, store }: PropsWithChildren<{ store: AppStore }>): ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
}

export function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = makeStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  return {
    store,
    ...rtlRender(
      ui,
      {
        wrapper: ({ children }) => <Wrapper store={store}>{children}</Wrapper>,
        ...renderOptions,
      },
    ),
  };
}

export function renderHook<Response, Params>(
  hook: (args: Params) => Response,
  {
    preloadedState,
    store = makeStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  return rtlRenderHook(
    hook,
    {
      wrapper: ({ children }) => <Wrapper store={store}>{children}</Wrapper>,
      ...renderOptions,
    },
  );
}
