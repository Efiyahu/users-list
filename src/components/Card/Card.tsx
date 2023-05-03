import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Image as RNImage, Pressable } from 'react-native';
import { isIOS } from '@src/utils';
import { useNavigation } from '@react-navigation/native';
import * as Actions from '@src/store/reducers/user.reducer';
import { useAppDispatch } from '@src/store/hooks';
import { Button } from 'native-base';

type Props = {
  title: string;
  name: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  id: string;
  email: string;
  streetNumber: number;
  imageUrl: string;
  onPressDelete: (userId: string) => void;
};

const Card = ({
  title,
  name,
  lastName,
  country,
  city,
  street,
  id,
  email,
  streetNumber,
  imageUrl,
  onPressDelete,
}: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const selectUser = React.useCallback(
    (userId: string) => dispatch(Actions.selectUser(userId)),
    [dispatch]
  );

  const onPressCard = () => {
    selectUser(id);
    navigation.navigate('UsersSettings' as never, {} as never);
  };

  return (
    <Wrapper ios={isIOS}>
      <Image source={{ uri: imageUrl }} />
      <Pressable onPress={onPressCard}>
        <TopWrapper>
          <Title>{title}.</Title>
          <SubTitle>
            {name} {lastName}
          </SubTitle>
        </TopWrapper>
        <Email>{email}</Email>
        <BottomWrapper>
          <Address>
            {country}, {city}
          </Address>
          <Street>
            {street} - {streetNumber}
          </Street>
        </BottomWrapper>
      </Pressable>
      <Id>{id}</Id>
      <StyledButton onPress={() => onPressDelete(id)} size='sm'>
        Delete
      </StyledButton>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.View<{ ios: boolean }>`
  width: 300px;
  height: 230px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 20px;
  ${({ theme }) => theme.boxShadow}
`;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 50px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.sizes.xl};
`;

const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.font.sizes.m};
`;

const ThinGray = css`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightgray};
  line-height: 15px;
`;

const Address = styled.Text`
  font-size: ${({ theme }) => theme.font.sizes.m};
`;

const Email = styled.Text`
  ${ThinGray}
  font-size: ${({ theme }) => theme.font.sizes.s};
`;

const Street = styled.Text`
  ${ThinGray}
`;

const Id = styled.Text`
  ${ThinGray}
  position: absolute;
  bottom: 5px;
  font-size: ${({ theme }) => theme.font.sizes.xs};
`;

const Image = styled(RNImage)`
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50px;
  top: -50px;
  left: 100px;
`;

const BottomWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 10px 0 0 0;
`;
