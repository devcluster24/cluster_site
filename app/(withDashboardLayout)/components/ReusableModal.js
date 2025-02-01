import React from "react";
import { Button, Modal } from "antd";

const ReusableModal = ({
  title,
  content,
  visible,
  onClose,
  footer,
  showCancelButton = false,
  showConfirmButton = false,
  onConfirm,
  className,
  style,
  modalWidth,
}) => {
  const defaultFooter = (
    <div className="flex justify-end gap-2 pb-5 pr-4">
      {showCancelButton && (
        <Button onClick={onClose} className="bg-gray-300 rounded-lg">
          Cancel
        </Button>
      )}
      {showConfirmButton && (
        <Button
          type="primary"
          onClick={() => {
            if (onConfirm) onConfirm();
            onClose();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Confirm
        </Button>
      )}
    </div>
  );

  return (
    <Modal
      width={modalWidth}
      open={visible}
      onCancel={onClose}
      footer={footer || defaultFooter}
      className={`rounded-lg shadow-lg ${className || ""}`}
      style={{
        ...style,
      }}
    >
      <div className={` w-full `}>
        <h2 className="text-xl w-full font-semibold text-white bg-primary py-3 px-4">
          {title}
        </h2>
        <div className="text-gray-600 p-4">{content}</div>
      </div>
    </Modal>
  );
};

export default ReusableModal;
