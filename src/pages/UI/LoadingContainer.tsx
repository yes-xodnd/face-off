import React from 'react';

// components
import Loading from './Loading';

// redux
import { RootState } from '../../index';
import { useSelector } from 'react-redux';

function LoadingContainer() {
  // state
  const isVisible = useSelector((state: RootState) => state.message.isLoading);

  return  <Loading isVisible={isVisible} /> 
}

export default LoadingContainer;