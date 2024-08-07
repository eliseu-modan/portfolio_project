// ZoomableImage.js
import React, { useState } from 'react';
import { Modal } from 'antd';

const ZoomableImage = ({ src, alt, width }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        style={{ cursor: 'pointer' }}
        onClick={showModal}
      />
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        centered
        width="80%" // Ajuste conforme necessário
      >
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: 'auto' }}
        />
      </Modal>
    </>
  );
};

export default ZoomableImage;
