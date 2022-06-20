import React from "react";
import "./Dialog.css";

const Modal = ({
  isVisible = false,
  title,
  heading,
  title2,
  description,
  content,
  footer,
  onClose,
}) => {
  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-heading">
            <h1 >{title}</h1>
            {heading && <div className="modal-sub-text">{heading}</div>}
            {title2 && <div className="modal-title-2">{title2}</div>}
            <p className="modal-title">{description}</p>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;

// const keydownHandler = ({ key }) => {
//   switch (key) {
//     case "Escape":
//       onClose();
//       break;
//     default:
//   }
// };

// React.useEffect(() => {
//   document.addEventListener("keydown", keydownHandler);
//   return () => document.removeEventListener("keydown", keydownHandler);
// });
