import React, { useState } from 'react';
import AddressModal from '../common/AddressModal';
import AskModal from '../common/AskModal';

const AskAddressModal = ({visible, onConfirm, onCancel}) => {

  return (
    <AddressModal
      visible={visible}
      title="도로명 주소 찾기"
      // description="포스트를 정말 삭제하시겠습니까?"
      confirmText="확인"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskAddressModal;
