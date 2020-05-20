import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRDispatch } from '../../../common/hooks';
import { SampleList } from '../components';
import { SampleListLoadParams } from '../models';
import { selSampleItems } from '../selectors';

interface Props {
  queries?: SampleListLoadParams;
}

/**
 * 컨테이너: 샘플 목록.
 * @param props
 */
export const SampleListContainer: FC<Props> = ({ queries }) => {
  const dispatch = useRDispatch();
  const items = useSelector(selSampleItems);

  useEffect(() => {
    // dispatch({
    //   type: 'sampleBasic/sampleListLoadAsync',
    //   payload: { ...queries },
    // });
    dispatch.sampleBasic.sampleListLoadAsync({ ...queries });
  }, [dispatch, queries]);

  return <SampleList items={items} />;
};
