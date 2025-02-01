import { Button, Modal } from "antd";
import React from "react";

const DeleteModal = ({
  isOpen,
  message = "Are you sure you want to delete?",
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  const defaultFooter = (
    <div className="flex justify-end gap-2 pb-5 pr-4">
      <Button onClick={onClose} className="bg-gray-300 rounded-lg">
        Cancel
      </Button>

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
    </div>
  );
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={defaultFooter}
      className={`rounded-lg shadow-lg `}
    >
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold text-white bg-primary py-3 px-4">
          Delete Confirmation
        </h2>
        <p className="mb-6 px-4">{message}</p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
