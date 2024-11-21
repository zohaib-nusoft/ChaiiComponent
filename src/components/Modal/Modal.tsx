import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntdModal } from "antd";
import { Content } from "antd/es/layout/layout";
import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Button, ChaiiText, Divider } from "../..";
import "../../sharedStyles.scss";
import styles from "./modal.module.scss";

interface Props {
  heading?: string;
  ref?: any;
  onClose?: () => void;
  onOpen?: () => void;
  onOk?: () => void;
  okText: string;
  children: React.ReactNode;
  headingIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Modal: React.FC<Props> = forwardRef(
  (
    {
      heading,
      onClose,
      onOpen,
      okText,
      children,
      onOk,
      headingIcon,
      isLoading,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const onCloseModal = () => {
      if (onClose) onClose();
      setOpen(false);
    };

    const onOkModal = () => {
      if (onOk) onOk();
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
      <AntdModal
        //modal zIndex will not work if <=1000
        zIndex={1111}
        closeIcon={<CloseOutlined onClick={() => setOpen(false)} />}
        title={
          <ChaiiText className={classNames(styles.heading)}>
            {headingIcon && headingIcon} {heading}
          </ChaiiText>
        }
        className={classNames(styles.heading)}
        open={open}
        destroyOnClose
        loading={isLoading}
        okText={okText}
        footer={
          <Content className="w-100 d-flex gap-2 justify-content-end">
            <Button onClick={onCloseModal} label="Cancel" btnClass="whiteBtn" />
            <Button onClick={onOkModal} label={okText} btnClass="filledBtn" />
          </Content>
        }
      >
        <Divider />
        <Content className="py-2">{children}</Content>
      </AntdModal>
    );
  }
);

export default Modal;
