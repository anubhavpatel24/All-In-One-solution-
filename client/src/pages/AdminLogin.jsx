import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../services/api';

function AdminLogin() {
  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      login(data.token, data.user);
      navigate('/dashboard');
    } catch (apiError) {
      setError(apiError.message || 'Invalid admin credentials');
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft">
        <h1 className="font-heading text-2xl font-extrabold text-brand-900">Admin Login</h1>
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input className="w-full rounded-xl border border-slate-300 px-4 py-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full rounded-xl border border-slate-300 px-4 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full rounded-xl bg-brand-500 py-2 font-bold text-white hover:bg-brand-700" type="submit">
            Sign In
          </button>
          {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
