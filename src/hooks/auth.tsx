import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Company {
  id: string;
  name: string;
  email: string;
  link: string;
  cnpj: string;
  photo: string;
  timeZone: string;
  plans: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo_url: string;
}

interface AuthState {
  token: string;
  company: Company;
  user: User;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  company: Company;
  user: User;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateAuth(company: Company, user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@System:token');
    const company = localStorage.getItem('@System:company');
    const user = localStorage.getItem('@System:user');

    if (token && company && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        company: JSON.parse(company),
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, company, user } = response.data;

    localStorage.setItem('@System:token', token);
    localStorage.setItem('@System:company', JSON.stringify(company));
    localStorage.setItem('@System:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, company });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@System:token');
    localStorage.removeItem('@System:company');
    localStorage.removeItem('@System:user');

    setData({} as AuthState);
  }, []);

  const updateAuth = useCallback(
    (company: Company, user: User) => {
      localStorage.setItem('@System:company', JSON.stringify(company));
      localStorage.setItem('@System:user', JSON.stringify(user));

      setData({
        token: data.token,
        company,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        company: data.company,
        user: data.user,
        signIn,
        signOut,
        updateAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
