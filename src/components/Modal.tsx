import { useState } from "react";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 z-50 bg-slate-600">
      모달창
      <button onClick={handleModalClose}>닫기</button>
    </div>
  );
}
