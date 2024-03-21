import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const GroupModal = ({ isModalOpen, users, handleAddChat, closeModal }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);

  };

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const handleCreateGroup = async () => {
    console.log("GroupName: " , groupName)
    console.log("selectedUsers: " , selectedUsers)
    const group_guid = uuidv4();

    try {
        let response = await fetch("http://localhost:8000/CreateGroup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({group_guid, groupName,selectedUsers }),
        })
        let res = await response.text()
        if (response.status == 200) {
            console.log(res)
        }
        setGroupName("")
        setSelectedUsers([])
    } catch (error) {
        console.log("Error Sending Message: ", error)
    }
    closeModal(); // Close the modal after creating the group
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">Create Group</h2>
            <div className="mb-4">
              <label htmlFor="groupName" className="text-white mr-2">Group Name:</label>
              <input
                type="text"
                id="groupName"
                className="border rounded px-2 py-1"
                value={groupName}
                onChange={handleGroupNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-white mr-2">Select Users:</label>
              {users.map((user) => (
                <div key={user.uid} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={user.uid}
                    checked={selectedUsers.includes(user.uid)}
                    onChange={() => handleUserSelect(user.uid)}
                    className="mr-2"
                  />
                  <label htmlFor={user.uid} className="text-white">{user.fullname}</label>
                </div>
              ))}
            </div>
            <button className="text-white bg-blue-500 rounded px-3 py-1 mr-2" onClick={handleCreateGroup}>Create Group</button>
            <button className="text-white bg-gray-500 rounded px-3 py-1" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupModal;
