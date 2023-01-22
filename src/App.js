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
  password: yup.string().min(6, "Password must be atlest 6 characters"),
  gender: yup.string().required("Gender is required"),
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
   
  };
  const resetForm = () => {
    setFormSubmitted(false);
    reset();
  };

  return (
    <div className="Form">
      <h1>Contact Form</h1>
      <p>Please fill all the fields given below.</p>
      <form onSubmit={handleSubmit(formSubmit)}>
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
          
        />
        
        <Password 
          id="password"
          type="password"
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
        <button type="submit" onClick={formSubmit}>Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
        {formSubmitted && <div>Thank you for submitting the form!</div>}
      </form>
    </div>
    
  );
}

export default App;
