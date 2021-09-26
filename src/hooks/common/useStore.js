import { useSelector as useSelector_ } from 'react-redux';

/**
 * 타입 선언된 Redux useSelector
 * @example
 * const userInfo = useSelector(state => state.user.info);
 */
export const useSelector = useSelector_;

export { useDispatch } from 'react-redux';
