import React, { useState } from "react";
import "./styles.css";

export function Contactform({ setSuccess }) {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false

    };

    const [values, setValues] = useState(initialValues);

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const validateForm = () => {

        let formErrors = {};
        let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if (values.firstName === '') formErrors.firstName = "This field is required";
        if (values.lastName === '') formErrors.lastName = "This field is required";

        if (values.email === '') {
            formErrors.email = "This field is required";
        } else if (!regexEmail.test(values.email)) {

            formErrors.email = "Enter a valid email id";
        }
        if (values.message === '') formErrors.message = "This field is required";
        if (!values.queryType) formErrors.queryType = "Please select a query type";
        if (!values.consent) formErrors.consent = "To submit the form, please check consent";

        setErrors(formErrors);

        return (Object.keys(formErrors).length === 0);

    }
    function resetForm() {
        setValues(initialValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm() === true) {
            setSuccess();
            resetForm();
        }
    }

    return (
        <div className="container">
            <div className="form-container" >
                <h1 className="heading"> Contact Us </h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-names">
                        <div className="form-group">
                            <label htmlFor="firstName"> First Name  <span className="star"> * </span></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={errors.firstName ? "error" : undefined}
                                value={values.firstName}
                                onChange={handleOnChange}
                            />
                            {errors.firstName && <p className="errorMsg" > {errors.firstName} </p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lasName"> Last Name  <span className="star"> * </span></label>
                            <input type="text"
                                id="lastName"
                                name="lastName"
                                value={values.lastName}
                                className={errors.lastName ? "error" : undefined}
                                onChange={handleOnChange}
                            />
                            {errors.lastName && <p className="errorMsg" > {errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="form-group" id="email">
                        <label htmlFor="email"> Email  <span className="star"> * </span></label>
                        <input type="text"
                            id="email"
                            name="email"
                            className={errors.email ? "error" : undefined}
                            value={values.email}
                            onChange={handleOnChange}
                        />
                        {errors.email && <p className="errorMsg" > {errors.email} </p>}
                    </div>

                    <div className="form-group radio">
                        <label > Query Type <span className="star"> * </span></label>
                        <div className="query">
                            <div className="query-type">
                                <input type="radio" id="option1" name="queryType" value="General Enquiry"
                                    checked={values.queryType === "General Enquiry"} onChange={handleOnChange} />
                                <label htmlFor="option1"> General Enquiry</label>
                            </div>
                            <div className="query-type">
                                <input type="radio" id="option2" name="queryType" value="Support Request"
                                    checked={values.queryType === "Support Request"} onChange={handleOnChange} />
                                <label htmlFor="option2"> Support Request</label>
                            </div>
                            
                        </div>
                        {errors.queryType && <p className="errorMsg" > {errors.queryType} </p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message <span className="star"> * </span></label>
                        <textarea id="message"
                            name="message"
                            rows={4}
                            className={errors.message ? "error": undefined }
                            value={values.message}
                            onChange={handleOnChange}
                        />
                        {errors.message && <p className="errorMsg" > {errors.message}</p>}
                    </div>

                    <div className="form-group checkbox">
                        <input type="checkbox" id="consent" name="consent" checked={values.consent} onChange={handleOnChange} />
                        <label htmlFor="consent" >I consent to be contacted by the team <span className="star"> * </span></label>
                        {errors.consent && <p className="errorMsg" >{errors.consent} </p>}
                    </div>

                    <button type="submit" >Submit </button>
                </form>
            </div>
        </div>
    )
}