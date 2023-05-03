import * as React from 'react';
import { Button, useToast, ScrollView } from 'native-base';
import styled from 'styled-components/native';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '@src/store/hooks';
import * as Actions from '@src/store/reducers/user.reducer';
import Input from '@src/components/Input/Input';

const AddUser = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      Actions.addUser({
        title: data.title,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        country: data.country,
        city: data.city,
        imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
        id: `${Math.floor(Math.random() * 100000000)}-${Date.now()}`,
        street: data.street,
        streetNumber: 123,
      })
    );
    toast.show({
      description: 'User added successfully',
      placement: 'bottom',
      variant: 'solid',
    });
  };

  const inputRules = (name: string) => ({
    required: {
      value: true,
      message: `${name} is required`,
    },
    minLength: {
      value: 3,
      message: 'Please enter more then 3 letters',
    },
  });

  const emailRules = {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address',
    },
  };

  const titleRules = {
    required: {
      value: true,
      message: 'Title is required',
    },
    pattern: {
      value: /^(Mr|Mrs|Miss)$/,
      message: 'Title must be Mr, Mrs, or Miss',
    },
  };

  return (
    <Container>
      <StyledButton onPress={handleSubmit(onSubmit)} colorScheme='green'>
        Add User
      </StyledButton>
      <Input
        name='title'
        control={control}
        rules={titleRules}
        errorMessage={String(errors.title?.message)}
      />
      <Input
        name='name'
        control={control}
        rules={inputRules('name')}
        errorMessage={String(errors.name?.message)}
      />
      <Input
        name='lastName'
        control={control}
        rules={inputRules('lastName')}
        errorMessage={String(errors.lastName?.message)}
      />
      <Input
        name='email'
        control={control}
        rules={emailRules}
        errorMessage={String(errors.email?.message)}
        autoCapitalize='none'
      />
      <Input
        name='country'
        control={control}
        rules={inputRules('country')}
        errorMessage={String(errors.country?.message)}
      />
      <Input
        name='city'
        control={control}
        rules={inputRules('city')}
        errorMessage={String(errors.city?.message)}
      />

      <Input
        name='street'
        control={control}
        rules={inputRules('street')}
        errorMessage={String(errors.street?.message)}
      />
    </Container>
  );
};

export default AddUser;

const Container = styled(ScrollView)`
  padding: 20px;
  margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
  margin: 10px auto;
`;
