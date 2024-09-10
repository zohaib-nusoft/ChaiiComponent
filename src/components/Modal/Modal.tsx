import { Modal as AntdModal } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Divider } from "../..";
import "../../sharedStyles.scss";

interface Props {
  heading?: string;
  ref?: any;
  onClose?: () => void;
  onOpen?: () => void;
  okText: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = forwardRef(
  ({ heading, onClose, onOpen, okText, children }, ref) => {
    const [open, setOpen] = useState(false);

    const onCloseModal = () => {
      if (onClose) onClose();
      setOpen(false);
    };

    const onOpenModal = () => {
      if (onOpen) onOpen();
      setOpen(true);
    };

    useImperativeHandle(ref, () => ({
      openModal: () => onOpenModal(),
      closeModal: () => onCloseModal(),
    }));
    return (
      <>
        <AntdModal
          //modal zIndex will not work if >=1000
          zIndex={1111}
          title={heading}
          open={open}
          okText={okText}
          onOk={() => onCloseModal()}
          onCancel={onCloseModal}
        >
          <Divider />
          {children}
        </AntdModal>
      </>
    );
  }
);

export default Modal;
