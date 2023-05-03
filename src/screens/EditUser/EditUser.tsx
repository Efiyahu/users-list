import * as React from 'react';
import { Button, useToast, ScrollView } from 'native-base';
import styled from 'styled-components/native';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import * as Actions from '@src/store/reducers/user.reducer';
import Input from '@src/components/Input/Input';
import UserSelector from '@src/store/selectors/users.selector';

const EditUser = () => {
  const userId = useAppSelector(UserSelector.userCurrentId);
  const users = useAppSelector(UserSelector.users);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm();
  const toast = useToast();

  const currentUser = users.find((u) => u.id === userId);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      Actions.editUser({
        name: data.name,
        email: data.email,
        country: data.country,
        city: data.city,
        id: currentUser?.id ?? '',
        street: data.street,
      })
    );
    toast.show({
      description: 'User updated successfully',
      placement: 'bottom',
      variant: 'solid',
      duration: 3000,
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

  return (
    <Container>
      <Input
        name='name'
        control={control}
        rules={inputRules('name')}
        errorMessage={String(errors.name?.message)}
        defaultValue={currentUser?.name}
      />

      <Input
        name='email'
        control={control}
        rules={emailRules}
        errorMessage={String(errors.email?.message)}
        autoCapitalize='none'
        defaultValue={currentUser?.email}
      />

      <Input
        name='city'
        control={control}
        rules={inputRules('city')}
        errorMessage={String(errors.city?.message)}
        defaultValue={currentUser?.city}
      />
      <Input
        name='country'
        control={control}
        rules={inputRules('country')}
        errorMessage={String(errors.country?.message)}
        defaultValue={currentUser?.country}
      />
      <Input
        name='street'
        control={control}
        rules={inputRules('street')}
        errorMessage={String(errors.street?.message)}
        defaultValue={currentUser?.street}
      />
      <StyledButton
        disabled={!isDirty}
        onPress={handleSubmit(onSubmit)}
        colorScheme='green'
      >
        Edit User
      </StyledButton>
    </Container>
  );
};

export default EditUser;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledButton = styled(Button)`
  margin: 10px auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
