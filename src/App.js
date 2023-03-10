import Input from "./Input";
import Password from "./Password";
import Select from "./Select";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Gender from "./Gender";

const schema = yup.object({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  phone: yup
    .string()
    .required("Phone Number is a required field")
    .matches(/^\d{10}$/, 'Invalid phone number'),
  password: yup.string().min(8, "Password must be atleast 8 characters"),
  gender: yup.string().nullable().required("Gender is required"),
  age: yup.string().required("Age is required"),
  comment: yup.string().required("This field is required")
})

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { handleSubmit, register, formState:{errors}, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    setFormSubmitted(true);
    console.log(data);
    reset();
  };
  const resetForm = () => {
    setFormSubmitted(false);
    reset();
  };

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-medium mb-4 text-center">Contact Form</h1>
      <p className="text-l font-small mb-4 text-center">Please fill all the fields given below.</p>
      <form className="mx-auto p-10 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit(formSubmit)}>
        <Input 
          id="name" 
          label="Name" 
          type="text" 
          placeholder="Name" 
          register={{...register("name")}}
          errorMessage={errors.name?.message}
        />
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          placeholder="Email" 
          register={{...register("email")}}
          errorMessage={errors.email?.message}
        />
        <Input 
          id="phone" 
          label="Phone" 
          type="text" 
          placeholder="Phone" 
          register={{...register("phone")}}
          errorMessage={errors.phone?.message}
        />
        <Select
          id="age"
          label="Age"
          register={{...register("age")}}
          errorMessage={errors.age?.message}
        />
        <Gender
          id="gender"
          label="Gender"
          register={{...register("gender")}}
          errorMessage={errors.gender?.message}
        />
        
        <Password 
          id="password"
          label="Password"
          
          placeholder="password"
          register={{...register("password")}}
          errorMessage={errors.password?.message}
        />
        <Input
          id="comment"
          type="comment" 
          label="Comment"
          register={{...register("comment")}}
          errorMessage={errors.comment?.message}
        />
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg" type="submit" >Submit</button>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg" type="button" onClick={resetForm}>Reset</button>
        {formSubmitted && <div>Thank you for submitting the form!</div>}
      </form>
    </div>
    
  );
}

export default App;
