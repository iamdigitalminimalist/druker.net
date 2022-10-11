import { Container } from '@ordev/shared/ui';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type InputDate = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
};

const metaContactPage = {
  title: 'Contact - Or Druker',
  description: `Discover how to contact Or Druker`,
  image: '/or-banner.png',
  type: 'website',
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputDate>();

  const onSubmitForm = async (values: InputDate) => {
    const config = {
      method: 'POST',
      url: `/api/contact`,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        // console.log('success');
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container
      title={metaContactPage.title}
      description={metaContactPage.description}
      image={metaContactPage.image}
      type={metaContactPage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="prose prose-sm sm:prose-lg w-full dark:prose-dark">
            <div className="mx-auto max-w-md sm:max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-lg sm:mt-3">
                I&apos;d love to hear from you! Send a message using the form
                opposite, or send an email to{' '}
                <a href="mailto:hello@druker.net">hello@druker.net</a>
              </p>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      {...register('firstName', {
                        required: {
                          value: true,
                          message: 'Please enter your first name',
                        },
                      })}
                      id="firstName"
                      placeholder="First Name"
                      className={`caret-blue-700 dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm ${
                        errors.firstName ? 'ring-2 ring-red-500' : null
                      }`}
                    />
                    <span className="text-red-400 text-sm py-2">
                      {errors?.firstName?.message}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      {...register('lastName', {
                        required: {
                          value: true,
                          message: 'Please enter your last name',
                        },
                      })}
                      id="lastName"
                      placeholder="Last Name"
                      className={`caret-blue-700 dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm ${
                        errors.lastName ? 'ring-2 ring-red-500' : null
                      }`}
                    />
                    <span className="text-red-400 text-sm py-2">
                      {errors?.lastName?.message}
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Please enter your email address',
                        },
                        minLength: {
                          value: 8,
                          message: 'Your email is too short',
                        },
                        maxLength: {
                          value: 80,
                          message: 'Your email is too long',
                        },
                        pattern: {
                          value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email',
                        },
                      })}
                      id="email"
                      autoComplete="email"
                      className={`caret-blue-700 dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm ${
                        errors.email ? 'ring-2 ring-red-500' : null
                      }`}
                    />
                    <span className="text-red-400 text-sm py-2">
                      {errors?.email?.message}
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="tel"
                      {...register('phoneNumber')}
                      id="phoneNumber"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="caret-blue-700 dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      How can I help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      {...register('message', {
                        required: {
                          value: true,
                          message: 'Please enter a message',
                        },
                        minLength: {
                          value: 20,
                          message: 'Your message is too short',
                        },
                        maxLength: {
                          value: 500,
                          message: 'Your message is too long',
                        },
                      })}
                      id="message"
                      placeholder="Type your message here"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className={`caret-blue-700 dark:text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm ${
                        errors.email ? 'ring-2 ring-red-500' : null
                      }`}
                    />
                    <span className="text-red-400 text-sm py-2">
                      {errors?.message?.message}
                    </span>
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="dark:text-gray-100 inline-flex justify-center rounded-md border border-transparent dark:bg-gray-700 py-2 px-4 text-sm font-medium text-gray-900 bg-gray-300 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
