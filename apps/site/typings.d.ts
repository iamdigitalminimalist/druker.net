enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

interface FormState {
  state: Form;
  message?: string;
}

interface Subscribers {
  count: number;
}

type InputDate = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
};
