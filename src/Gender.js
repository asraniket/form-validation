export default function Gender({id, label, placeholder, type, register, errorMessage}) {
	return(
		<div className="input-group">
          <label>
        Gender:
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
      </label>
		  
		  <span className="error-message" >{errorMessage}</span>
        </div>
	);
}