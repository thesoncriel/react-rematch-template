import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { trackingMiddleware } from '../common/middleware/tracking.middleware';
import { rematchModels, RootRematch } from './rematchModels';

export const store = init({
  models: rematchModels,
  redux: {
    middlewares: [trackingMiddleware],
  },
});

export type Store = typeof store;
export type RDispatch = RematchDispatch<RootRematch>;
// export type RDispatch = any;
export type AppState = RematchRootState<RootRematch>;
