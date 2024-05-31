export const validationRules = {
  Name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name should be at least 3 characters long",
    },
    maxLength: {
      value: 12,
      message: "Name should be at most 12 characters long",
    },
  },
  Email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  },
  Password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password should be at least 6 characters long",
    },
  },
};
