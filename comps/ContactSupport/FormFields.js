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

const OptionField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2 text-dark form-floating">
            <select 
                className={`form-control rounded-pill ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            >
                <option defaultValue>{label}:</option>
                <option value="Suggestion/Comment">Suggestion/Comment</option>
                <option value="Report Bug">Report Bug</option>
                <option value="Service">Something Else</option>
            </select>
            <label htmlFor={field.name}>{label}</label>
            <ErrorMessage name={field.name} className="fs-6 text-danger" component="div" />
        </div>
    );
}

const MessageField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <textarea 
                placeholder={label} 
                rows="8"
                className={`form-control rounded-3 ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            <label className=" form-label text-secondary" htmlFor={field.name}></label>
            <ErrorMessage name={field.name} className="text-danger" component="div" />

        </div>
    );
}

export default TextField;
export { OptionField, MessageField };