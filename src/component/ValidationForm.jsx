import React, { useState } from 'react';
import { validateData } from '../utils/validation';

function ValidationForm() {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'number' ? Number(value) || '' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateData(
      Number(formData.number),
      formData.name,
      formData.email
    );

    console.log('valiadating data', validation);

    if (validation.isValid) {
      console.log('Form submitted successfully:', formData);
      setErrors({});
      setSubmitted(true);
    } else {
      setErrors(validation.errors);
      setSubmitted(false);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='number' style={{ color: '#008000' }}>
            Number:
          </label>

          <input
            type='number'
            id='number'
            name='number'
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <div className='error'>{errors.number}</div>}
        </div>

        <div className='form-group'>
          <label htmlFor='name' style={{ color: '#008000' }}>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className='error'>{errors.name}</div>}
        </div>

        <div className='form-group'>
          <label htmlFor='email' style={{ color: '#008000' }}>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>

        <button type='submit'>Submit</button>
      </form>

      {submitted && (
        <div className='success-message'>Form submitted successfully!</div>
      )}
    </div>
  );
}

export default ValidationForm;
