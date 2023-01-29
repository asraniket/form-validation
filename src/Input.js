export default function Input({id, label, placeholder, type, register, errorMessage}) {
	return(
		<div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor={id}>{label}</label>
          <input className="bg-gray-200 p-2 rounded-lg" type={type} id={id} placeholder={placeholder} {...register} />
		  
		  <span className="text-red-500" >{errorMessage}</span>
        </div>
	);
}