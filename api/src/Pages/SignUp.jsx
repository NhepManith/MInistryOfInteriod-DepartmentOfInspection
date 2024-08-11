import React, { useState } from 'react';
import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill in all fields.');
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setFormData({});
        return setErrorMessage(data.message);
      }

      setLoading(false);
      // Handle successful sign up (e.g., redirect to login page or show success message)
      navigate('/sign-in'); // Example: redirect to sign-in page after successful sign-up
    } catch (error) {
      setLoading(false);
      setFormData({});
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* Left-side */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-1 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Logo</span> Organization
          </Link>
          <p className='mt-5 text-sm'>Hello, Welcome to Logo Organization</p>
        </div>
        {/* Right-side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Username' />
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange} value={formData.username || ''} />
              <Label value='Email' />
              <TextInput type='email' placeholder='Your@gmail.com' id='email' onChange={handleChange} value={formData.email || ''} />
              <Label value='Password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange} value={formData.password || ''} />
            </div>
            <Button gradientDuoTone="purpleToBlue" outline type='submit' disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
