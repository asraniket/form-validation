export default function Select({id, label, type, register, errorMessage }) {
	return(
		<div className="input-group">
          <label htmlFor={id}>{label}</label>
                  <select type={type} id={id}  {...register} >
		  <option value="">Select an option</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46+">46+</option>
		  </select>
		  <span className="error-message" >{errorMessage}</span>
        </div>
	);
}