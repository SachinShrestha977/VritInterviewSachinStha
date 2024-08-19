import React, { useEffect, useState } from "react";

const Task2APIFetch = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-200 pt-8 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          User List
        </h1>
        <ul className="divide-y divide-gray-300">
          {users.map((user) => (
            <li
              key={user.id}
              className="py-4 px-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="text-lg font-medium text-gray-700">
                {user.name}
              </div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task2APIFetch;
