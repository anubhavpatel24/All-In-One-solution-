import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('adminUser');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const login = (nextToken, nextUser = null) => {
    setToken(nextToken);
    setUser(nextUser);
    localStorage.setItem('adminToken', nextToken);
    if (nextUser) {
      localStorage.setItem('adminUser', JSON.stringify(nextUser));
    }
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  };

  const value = useMemo(
    () => ({
      token,
      user,
      isAdmin: user?.role === 'admin',
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
