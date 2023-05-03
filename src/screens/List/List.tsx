import * as React from 'react';
import API from '@src/api/methods';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { useQuery } from '@tanstack/react-query';
import { Button, FlatList, Input, Spinner, Text } from 'native-base';
import styled from 'styled-components/native';
import * as Actions from '@src/store/reducers/user.reducer';
import Card from '@src/components/Card/Card';
import UserSelector from '@src/store/selectors/users.selector';
import { useNavigation } from '@react-navigation/native';
import { TransformedUser } from '@src/api/transform';
import Modal from '@src/components/Modal/Modal';

const List = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(UserSelector.users);
  const currentUser = useAppSelector(UserSelector.userCurrentId);
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState<string>('');
  const [open, setOpen] = React.useState<boolean>(false);

  const setUsers = React.useCallback(
    (data: TransformedUser[]) => dispatch(Actions.setUsers(data)),
    [dispatch]
  );

  const setCurrentUser = React.useCallback(
    (data: string) => dispatch(Actions.selectUser(data)),
    [dispatch]
  );

  const { isLoading, isError } = useQuery(['users'], () => API.getUsers(10), {
    onSuccess: (res) => {
      setUsers(res as TransformedUser[]);
    },
  });

  const handleDeleteUser = () => {
    dispatch(Actions.deleteUser(currentUser ?? ''));
    setOpen(false);
  };

  if (isLoading) {
    return <Spinner size='lg' />;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  const addUser = () => {
    navigation.navigate('AddUser' as never, {} as never);
  };

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Modal
        onClose={() => setOpen(false)}
        text='Are you sure you want to delete this user?..'
        isOpen={open}
        accept='Yes'
        cancel='No'
        onAccept={handleDeleteUser}
      />
      <Input
        colorScheme={'blueGray'}
        placeholder='Filter by name...'
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredUser}
        renderItem={({ item }) => (
          <Card
            onPressDelete={(userId: string) => {
              setOpen(true);
              setCurrentUser(userId);
            }}
            title={item.title}
            name={item.name}
            lastName={item.lastName}
            country={item.country}
            city={item.city}
            street={item.street}
            streetNumber={item.streetNumber}
            email={item.email}
            id={item.id}
            imageUrl={item.imageUrl ?? ''}
          />
        )}
      />
      <StyledButton onPress={addUser}>Add User Screen</StyledButton>
    </Container>
  );
};

export default List;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
`;
