import React, { useState } from 'react';

export default function Password({id, label, placeholder, type, register, errorMessage, togglepassword}) {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');

	return(
		<div>
			<label>Password</label>
			<input
				type={showPassword ? 'text' : 'password'}
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button onClick={() => setShowPassword(!showPassword)}>
				{showPassword ? 'Hide' : 'Show'} Password
			</button>
			<span className="error-message" >{errorMessage}</span>
    	</div>
	);
}