import React, { useState } from 'react';
import API from '../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('account/register/', { username, password });
      const token = response.data.token;

      // Save the token in localStorage
      localStorage.setItem('authToken', token);

      // Notify success and redirect
      setSuccess(true);
      alert('Registered successfully!');
      window.location.href = '/login'; // Redirect to home
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to register. Try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-28">
  <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h1>
  
  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
  {success && <p className="text-green-500 text-sm mb-4">Registered successfully!</p>}
  
  <form onSubmit={handleRegister}>
    <div className="mb-4">
      <label className="block text-gray-600 font-medium mb-2">Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <div className="mb-6">
      <label className="block text-gray-600 font-medium mb-2">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
      <p className="text-sm text-gray-600 mb-4">
            Already have an account?{' '}
            <button
              className="text-blue-600 hover:underline"
              onClick={() => (window.location.href = '/login')}
            >
              Login
            </button>
      </p>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Register
    </button>
  </form>
</div>

  );
};

export default Register;
