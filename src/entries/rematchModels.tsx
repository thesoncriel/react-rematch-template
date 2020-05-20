import { sampleBasic } from '../modules/sample/rematch';

export interface RootRematch {
  sampleBasic: typeof sampleBasic;
}

export const rematchModels: RootRematch = {
  sampleBasic,
};
