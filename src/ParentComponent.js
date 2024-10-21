
import React from 'react';
import { useDispatch } from 'react-redux';
import { onBordingRequest } from './stores/action/onBordingAction';
const ParentComponent = ({ children }) => {
    const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(onBordingRequest());
  }, [dispatch]);
  return <>{children}</>;
};

export default ParentComponent;