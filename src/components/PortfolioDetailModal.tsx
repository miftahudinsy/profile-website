import React from "react";

// Definisikan tipe data untuk props
interface PortfolioItemDetail {
  situation: string;
  task: string;
  action: string;
  result: string;
  technologies: string[];
}

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: PortfolioItemDetail;
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  isOpen,
  onClose,
  title,
  details,
}) => {
  if (!isOpen) return null;

  return (
    // Overlay background
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      {/* Modal content container */}
      <div className="bg-gray-700 text-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
          aria-label="Close modal"
        >
          &times; {/* HTML entity for X */}
        </button>

        {/* Modal content */}
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{title}</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong className="font-medium text-yellow-500">Situation:</strong>{" "}
            {details.situation}
          </p>
          <p>
            <strong className="font-medium text-yellow-500">Task:</strong>{" "}
            {details.task}
          </p>
          <p>
            <strong className="font-medium text-yellow-500">Action:</strong>{" "}
            {details.action}
          </p>
          <p>
            <strong className="font-medium text-yellow-500">Result:</strong>{" "}
            {details.result}
          </p>
          <p className="mt-3">
            <strong className="font-medium text-yellow-500">
              Technologies:
            </strong>{" "}
            {details.technologies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailModal;
