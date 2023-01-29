export default function Select({id, label, type, register, errorMessage }) {
	return(
		<div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor={id}>{label}</label>
                  <select class="bg-gray-200 p-2 rounded-lg" type={type} id={id}  {...register} >
		  <option value="">Select an option</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46+">46+</option>
		  </select>
		  <span className="text-red-500" >{errorMessage}</span>
        </div>
	);
}