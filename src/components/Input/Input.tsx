import * as React from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FormControl, Input as NativeInput, IInputProps } from 'native-base';

interface Props extends IInputProps {
  control?: Control<FieldValues, any>;
  name?: string;
  rules?: RegisterOptions;
  errorMessage?: string;
}

const Input = ({
  control,
  name,
  rules,
  errorMessage,
  autoCapitalize,
  defaultValue,
  width,
  height,
}: Props) => {
  return (
    <FormControl
      style={{ paddingBottom: 20 }}
      isInvalid={errorMessage !== 'undefined'}
    >
      <FormControl.Label>
        {name && name.slice(0, 1).toUpperCase() + name?.slice(1)}
      </FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <NativeInput
            height={height}
            width={width}
            placeholder={name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize={autoCapitalize}
          />
        )}
        name={name ?? ''}
        rules={rules}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
