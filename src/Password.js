import React, { useState } from 'react';

export default function Password({id, label, placeholder, type, register, errorMessage}) {
	const [showPassword, setShowPassword] = useState(false);
	
	const togglePassword = () => {
		setShowPassword((showPassword) => !showPassword);
	  };

	return(
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder='Password'
				{...register}
			/>
			
          <input
            id="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={togglePassword}
          />
		  <label htmlFor="checkbox">Show password</label>
			<span className="error-message" >{errorMessage}</span>
    	</div>
	);
}