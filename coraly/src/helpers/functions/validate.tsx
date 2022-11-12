interface IValues {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  workspace?: string;
  agreed?: boolean;
  authorized?: boolean;
  repeatPassword?: string;
}

const regExps = {
  email: new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),
  workspace: new RegExp("^[a-zA-Z][a-zA-Z0-9-_.]+$"),
  naming: new RegExp("^[A-Z][a-z]+$"),
};

const validate = (values: any) => {
  const errors: IValues = {};

  if (values.name !== undefined) {
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 2) {
      errors.name = "Name must be more than 2 characters!";
    } else if (!regExps.naming.test(values.name)) {
      errors.name =
        "Name must contain only letters and must begin with a capital letter!";
    } else if (values.name.length > 32) {
      errors.name = "Name cannot exceed more than 32 characters!";
    }
  }

  if (values.surname !== undefined) {
    if (!values.surname) {
      errors.surname = "Surname is required!";
    } else if (values.surname.length < 2) {
      errors.surname = "Surname must be more than 2 characters!";
    } else if (!regExps.naming.test(values.surname)) {
      errors.surname =
        "Surname must contain only letters and must begin with a capital letter!";
    } else if (values.surname.length > 32) {
      errors.surname = "Surname cannot exceed more than 32 characters!";
    }
  }

  if (values.email !== undefined) {
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regExps.email.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
  }

  if (values.password !== undefined) {
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters!";
    }
  }

  if (
    values.repeatPassword !== undefined &&
    values.password !== values.repeatPassword
  ) {
    errors.repeatPassword = "Passwords do not match!";
  }

  if (values.workspace !== undefined) {
    if (!values.workspace) {
      errors.workspace = "Workspace is required!";
    } else if (!regExps.workspace.test(values.workspace)) {
      errors.workspace =
        "Workspace name must contain only letters, numbers, spaces, hyphens, periods and underscores and must begin with a letter!";
    } else if (values.workspace.length < 4) {
      errors.workspace = "Workspace must be more than 4 characters!";
    } else if (values.workspace.length > 32) {
      errors.workspace = "Workspace cannot exceed more than 32 characters!";
    }
  }

  if (values.agreed !== undefined && !values.agreed) {
    errors.agreed = true;
  } else {
    delete errors.agreed;
  }

  if (values.authorized !== undefined && !values.authorized) {
    errors.authorized = true;
  } else {
    delete errors.authorized;
  }

  return errors;
};

export default validate;
