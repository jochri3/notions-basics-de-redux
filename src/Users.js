import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/users/users.actions';

export default function () {
  const usersData = useSelector((state) => state.usersData);
  const diffuser = useDispatch();
  useEffect(() => {
    diffuser(fetchUsers());
  }, []);

  const { users, loading } = usersData;

  const contenuAAfficher = () => {
    if (loading) {
      return <p>Chargment en cours ....</p>;
    } else {
      return users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      ));
    }
  };
  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>{contenuAAfficher()}</tbody>
      </table>
    </>
  );
}
