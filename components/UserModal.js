// Modal.js
import React from 'react';

const Modal = ({ isModalOpen, users, handleAddChat, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center">
          <div className="bg-primary p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-[#ffff]">Users List</h2>
            <ul>
              {users.map((chat, index) => (
                <li className='text-[#ffff] cursor-pointer' key={index} onClick={() => handleAddChat(chat.uid)}>{chat.fullname}</li>
              ))}
            </ul>
            <button className='text-[#ffff]' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
