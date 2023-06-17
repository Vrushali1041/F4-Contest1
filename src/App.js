import './App.css';
import {useState} from 'react';


function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, name, password, confirmPassword } = formData;

    // Perform basic form validation
    const newErrors = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    };

    if (!email) {
      newErrors.email = 'Please enter your email.';
    }

    if (!name) {
      newErrors.name = 'Please enter your name.';
    }

    if (!password) {
      newErrors.password = 'Please enter a password.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.name &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      // Form is valid, submit the data or perform further actions
      setSuccessMessage('Successfully Signed Up!');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } else {
      setErrorMessage('Error: All field are mandatory.');
      setSuccessMessage('');
    }
  };

  return (
    <div id="head">
      <h1 id='heading'>Signup</h1>
    <form id="form" onSubmit={handleSubmit}>

      <div>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>

    

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <button type="submit" id='btn'>Signup</button>
    </form>
    </div>
  );
}

export default App;
