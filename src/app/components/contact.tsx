"use client";
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Toast from './toast';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  companyName: Yup.string(),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string(),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export default function Contact() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);

  const initialValues = {
    name: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values: { [x: string]: string | Blob; }, { resetForm }: any) => {
    // Convert form data to FormData object
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    // Add your API key
    formData.append('apikey', 'YPUR API KEY GOES HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowSuccessToast(true);
        resetForm();
      } else {
        setShowErrorToast(true);
      }
    } catch (error) {
        setShowErrorToast(true);
    }
  };

   // Function to close the toasts
   const closeSuccessToast = () => {
     setShowSuccessToast(false);
   };
  
   const closeErrorToast = () => {
     setShowErrorToast(false);
   };
  
   const closeWarningToast = () => {
     setShowWarningToast(false);
   };

  return (
    <div id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400 text-xl font-normal">
          Feel free to reach out and connect with me. I&apos;m here to collaborate and explore the digital world.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-8 " action="https://api.web3forms.com/submit" method="post">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`shadow-sm bg-gray-50 p-5 ${
                    errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light `}
                  placeholder="Your Name"
                  required
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  className={`shadow-sm bg-gray-50 p-5 ${
                    errors.companyName && touched.companyName
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light `}
                  placeholder="Your Company Name (optional)"
                />
                <ErrorMessage
                  name="companyName"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`shadow-sm bg-gray-50 p-5 ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light `}
                  placeholder="youremail@example.com"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`shadow-sm bg-gray-50 p-5 ${
                    errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light `}
                  placeholder="Your Phone Number (optional)"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div>
              
              <Field
                type="text"
                id="subject"
                name="subject"
                className={`block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg p-5 ${
                  errors.subject && touched.subject ? 'border-red-500' : 'border-gray-300'
                } shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light `}
                placeholder="Enter a subject"
                
              />
              <ErrorMessage
                name="subject"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              
              <Field
                as="textarea"
                id="message"
                name="message"
                style={{ minHeight: '100px' }}
                className={`block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm p-5 ${
                  errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
                } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Leave a message..."
                required
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className=" font-medium bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 hover:bg-gradient-to-br text-black dark:bg-gradient-to-r dark:from-light2blue dark:via-light1blue dark:to-darkblue dark:hover:bg-gradient-to-br dark:text-white font- py-2 px-4 rounded-lg"
            >
              Sumbit
            </button>
          </Form>
        )}
      </Formik>
      {/* Display success toast */}
      {showSuccessToast && (
         <Toast id="toast-success" message="Your message has been sent successfully." type="success" onClose={closeSuccessToast} />
      )}

      {/* Display error toast */}
      {showErrorToast && (
        <Toast id="toast-danger" message="An error occurred while processing your request." type="danger" onClose={closeErrorToast} />
      )}

      {/* Display warning toast */}
      {showWarningToast && (
        <Toast id="toast-warning" message="Please review your submission for potential issues." type="warning" onClose={closeErrorToast} />
      )}
    </div>
  );
}
function setToasts(arg0: (prevToasts: any) => any[]) {
    throw new Error('Function not implemented.');
}

