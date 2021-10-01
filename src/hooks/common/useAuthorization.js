import { useEffect } from 'react';
import axios from 'axios';
// slices
import { getUser } from 'slices/user.thunk';
// hooks
import { useDispatch } from 'hooks/common/useStore';

/**
 * 사용자 token 설정 hook
 */
const useAuthorization = () => {
  const dispatch = useDispatch();

  /** 토큰 설정 */
  const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  useEffect(() => {
    if (!localStorage.getItem('tk')) {
      return;
    }

    setToken(localStorage.getItem('tk'));
    dispatch(getUser());
  }, [dispatch]);

  return {};
};

export default useAuthorization;
