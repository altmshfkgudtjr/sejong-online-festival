import styled from 'styled-components';
import { useEffect, useCallback } from 'react';
// components
import * as modals from 'components/organisms/modals/index';
// slices
import { pushModal, popModal, deleteModal, clearModal } from 'slices/modal';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// utils
import * as domUtils from 'lib/utils/dom';
// styles
import * as animations from 'lib/styles/animations';
import { palette, zIndex } from 'cds/styles';
/**
 * Modal Hook
 * - Modal이 공유되는 페이지에서 사용하는 훅
 *
 * @example
 * const Page1 = () => {
 *   const { Modal } = useModal();
 *
 *   return (
 *     <>
 *       <Modal />
 *     </>
 *   );
 * }
 *
 * const Page2 = () => {
 *   const { initModal } = useModal();
 *
 *   return (
 *     <>
 *       <button
 *         onclick={initModal({
 *           name: "Login",
 *           args: { title: '로그인' }
 *         })}
 *       >
 *         Init Modal
 *       </button>
 *     </>
 *   );
 * }
 */
const useModal = () => {
  const dispatch = useDispatch();

  /**
   * 모달 생성 (PUSH)
   * @param {object} props
   * @param {string} props.name 모달명
   * @param {any} props.args Parameter
   */
  const initModal = useCallback(
    ({ name, args }) => {
      dispatch(pushModal({ name, args }));
    },
    [dispatch],
  );

  /** 모달 제거 (POP) */
  const popModal = useCallback(() => dispatch(popModal()), [dispatch]);

  /**
   * 모달 제거 (SPECIFIC)
   * @param {object} props
   * @param {string} props.name 모달명
   */
  const onDeleteModal = useCallback(
    ({ name }) => {
      dispatch(deleteModal({ name }));
    },
    [dispatch],
  );

  /** 전체 모달 제거 */
  const onClearModal = useCallback(() => dispatch(clearModal()), [dispatch]);

  return {
    Modal,
    initModal,
    onDeleteModal,
    onClearModal,
  };
};

/**
 * Modal Center
 */
const Modal = () => {
  const dispatch = useDispatch();
  const modalList = useSelector(state => state.modal.modalList);
  const isShow = modalList.length !== 0;

  /** Prevent MouseDown Close */
  const PreventModalOff = e => e.stopPropagation();

  /** Modal Close */
  const onMouseDown = name => dispatch(deleteModal(name));

  const ModalList = modalList.map(modal => {
    const Content = modals[modal.name];
    return (
      <Content
        key={modal['name']}
        PreventModalOff={PreventModalOff}
        ModalOff={() => onMouseDown(modal['name'])}
        args={modal['args']}
      />
    );
  });

  useEffect(() => {
    if (isShow) {
      domUtils.disableDocumentScrolled();
    } else {
      domUtils.enableDocumentScrolled();
    }
  }, [isShow]);

  return (
    <>
      {isShow && (
        <Background
          onMouseDown={() => {
            dispatch(popModal());
          }}
        >
          {ModalList}
        </Background>
      )}
    </>
  );
};

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${palette.dim.basic};
  z-index: ${zIndex.modal};
  overflow: hidden;
  animation: ${animations.fadeIn} 0.1s;

  &:after {
    content: '';
    min-height: inherit;
    font-size: 0;
  }
`;

export default useModal;
