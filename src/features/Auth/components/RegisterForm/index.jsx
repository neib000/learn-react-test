import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'features/Todo/components/form-controls/InputField';
import { Avatar, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Please enter title')
      .min(5, 'Title is too short!'),
  });

  const form = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        password: '',
        retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
      console.log(values);
    }
    form.reset();
  };
  return (
    <div>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        Todo Form
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField
          name="retypePassword"
          label="Confirm Password"
          form={form}
        />
      </form>
    </div>
  );
}

export default RegisterForm;
