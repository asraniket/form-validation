import React, { useState } from 'react';

export default function Password({id, label, placeholder, type, register, errorMessage}) {
	const [showPassword, setShowPassword] = useState(false);
	
	const togglePassword = () => {
		setShowPassword((showPassword) => !showPassword);
	  };

	return(
		<div className="mb-4">
			<label className="block text-gray-700 font-medium mb-2" htmlFor={id}>{label}</label>
			<input class="bg-gray-200 p-2 rounded-lg"
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
		  <span className="text-red-500" >{errorMessage}</span>
    	</div>
	);
}