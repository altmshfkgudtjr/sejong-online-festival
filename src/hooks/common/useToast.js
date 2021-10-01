import { useCallback } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
// components
export const Toast = dynamic(() => import('components/containers/common/toast'));
// slices
import { newToast } from 'slices/toast.thunk';
import { deleteToast } from 'slices/toast';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import * as animations from 'lib/styles/animations';
import { zIndex } from 'lib/styles';

/**
 * Toast Hook
 * - Toast가 공유되는 페이지에서 사용하는 훅
 * - 기본 유지 시간: 2000ms
 * @example
 * const App = () => {
 *   const { Toast } = useToast();
 *
 *   return (
 *     <>
 *       <Toast />
 *     </>
 *   );
 * }
 *
 * const Page1 = () => {
 *   const { initToast } = useToast();
 *
 *   const createTitleToast = () => initToast({
 *     title: "제목",
 *     message: "내용"
 *   });
 *
 *   const createToast = () => initToast({
 *     message: "내용"
 *   });
 *
 *   return (
 *     <>
 *       <button onclick={createTitleToast}>Init Title Toast</button>
 *       <button onclick={createToast}>Init Toast</button>
 *     </>
 *   );
 * }
 */
const useToast = () => {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  /**
   * 토스트 생성
   * @param {object} props
   * @param {string=} props.title 토스트 제목
   * @param {string} props.message 토스트 메세지
   * @param {number} props.time 토스트 지속 시간 (Default: 2000ms)
   */
  const initToast = useCallback(
    ({ title, message, time }) => {
      dispatch(
        newToast({
          title: title || '',
          message,
          time: time || 2000,
        }),
      );
    },
    [dispatch],
  );

  /** 토스트 제거 */
  const closeToast = () => dispatch(deleteToast());

  const PreventToastClose = e => e.stopPropagation();

  const ToastCenter = () => {
    if (toast.title || toast.message) {
      return (
        <ToastBackground onClick={closeToast}>
          <Toast title={toast.title} subTitle={toast.message} onClick={PreventToastClose} />
        </ToastBackground>
      );
    }
    return null;
  };

  return {
    Toast: ToastCenter,
    initToast,
  };
};

const ToastBackground = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${zIndex.toast};
  animation: 0.1s ${animations.fadeIn} ease;
`;

export default useToast;
