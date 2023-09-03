import React from 'react';

export interface ModalProps {
  modalOnChangeState: React.Dispatch<React.SetStateAction<boolean>>;
  modalCurrentState: boolean;
}
