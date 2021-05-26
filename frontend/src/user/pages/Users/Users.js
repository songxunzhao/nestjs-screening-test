import React, {useEffect, useState} from 'react';
import { UserApi } from '../../services/UserApi';

export function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserApi.getAllUsers()
      .then((users) => {
        setUsers(users);
      });
  }, []);

  const renderUsers = users.map((user) => {
    return <tr>
      <td>{user.email}</td>
      <td>{user.full_name}</td>
      <td>{user.role}</td>
      <td>{user.created_at}</td>
      <td>More details</td>
    </tr>
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {renderUsers}
        </tbody>
      </table>
    </div>
  )
}
