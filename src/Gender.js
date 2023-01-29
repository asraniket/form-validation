export default function Gender({id, label, placeholder, type, register, errorMessage}) {
	return(
		<div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        Gender:
        <input className="ml-2" type="radio" name="gender" value="male" {...register}/> Male
        <input className="ml-2" type="radio" name="gender" value="female" {...register}/> Female
      </label>
		  
		  <span className="text-red-500" >{errorMessage}</span>
        </div>
	);
}