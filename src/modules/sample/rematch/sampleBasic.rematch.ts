import { ModelConfig } from '../../../entries/stores.util';
import { ListRes } from '../../../common';
import { RDispatch } from '../../../entries/stores';
import {
  SampleItemModel,
  SampleListLoadParams,
  SampleQueryParams,
  SampleResItem,
} from '../models';
import { createSampleLinkList, sampleDataService } from '../services';

/**
 * 스토어 상태: 샘플 페이지에 대한 상태 모델.
 */
export interface SampleState {
  /**
   * 샘플 목록 데이터.
   */
  items: SampleItemModel[];
  /**
   * 전체 샘플 개수.
   */
  totalCount: number;
  /**
   * 링크 목록.
   */
  linkList: SampleQueryParams[];
  /**
   * 로딩중 여부.
   */
  loading: boolean;
}

export function getInitSampleState(): SampleState {
  return {
    items: [],
    totalCount: 0,
    linkList: createSampleLinkList(),
    loading: false,
  };
}

// type Effects = (dispatch: RDispatch) => ModelEffects<any>;

// const effects: Effects = dispatch => ({
//   async sampleListLoadAsync(payload: SampleListLoadParams) {
//     dispatch.sampleBasic.sampleListLoad();

//     try {
//       const res = await sampleDataService.loadList(payload);

//       dispatch.sampleBasic.sampleListSucc(res);
//     } catch (err) {
//       console.log(err);
//       alert(err.message);
//       dispatch.sampleBasic.sampleListFail(err);
//     }
//   },
// });

export const sampleBasic: ModelConfig<SampleState> = {
  state: getInitSampleState(),
  reducers: {
    sampleListLoad: state => ({
      ...state,
      loading: true,
    }),
    sampleListSucc: (state, payload: ListRes<SampleResItem>) => ({
      ...state,
      ...payload,
      loading: false,
    }),
    sampleListFail: state => ({
      ...state,
      loading: false,
    }),
  },
  effects: (dispatch: RDispatch) => ({
    async sampleListLoadAsync(payload: SampleListLoadParams) {
      dispatch.sampleBasic.sampleListLoad();

      try {
        const res = await sampleDataService.loadList(payload);

        dispatch.sampleBasic.sampleListSucc(res);
      } catch (err) {
        console.log(err);
        alert(err.message);
        dispatch.sampleBasic.sampleListFail(err);
      }
    },
  }),
};
