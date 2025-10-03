import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../slice/userSlice';

function Users() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {list.map((user) => (
        <h3>{user.firstName}</h3>
      ))}
    </div>
  );
}

export default Users;
