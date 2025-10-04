import * as Yup from "yup";

export const Schema = Yup.object().shape({
    
  email: Yup.string()
    .required(`Email is Required`)
    .email(`Email Must be Vaild Email`),

  password: Yup.string()
    .required(`Password is Requried`)
    .min(6, `Password Must be Atleast 6 Charater`),

});