import { createContext, useContext, useState } from 'react';

import Proptypes from 'prop-types';

const AuthContext = createContext();

const adminUser = {
  id: 1,
  name: 'Diego Ribeiro',
  email: 'diego2222110@gmail.com',
  password: '123456',
  profileImage:
    'https://avatars.mds.yandex.net/i?id=e09a647ce3b7b489f1d6e4ae7972b4c9-5099762-images-thumbs&n=13',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userLogged = localStorage.getItem('@framefruit: user');

    if (userLogged) return JSON.parse(userLogged);
    return null;
  });

  const signIn = ({ email, password }) => {
    if (email !== adminUser.email || password !== adminUser.password)
      throw new Error({ login: 'Email e/ou Senha estão incorretos.' });

    localStorage.setItem('@framefruit: user', JSON.stringify(adminUser));
    setUser(adminUser);
  };

  const signOut = () => {
    localStorage.removeItem('@framefruit: user');
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: Proptypes.element.isRequired,
};

export const useAuth = () => useContext(AuthContext);
