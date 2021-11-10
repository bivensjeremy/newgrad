import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2 text-dark form-floating">
            
            <input 
                placeholder={label}
                className={`form-control rounded-pill ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            <label className="text-secondary" htmlFor={field.name}>{label}</label>
            <ErrorMessage name={field.name} className="fs-6 text-danger" component="div" />
        </div>
    );
}

export default TextField;