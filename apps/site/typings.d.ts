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
