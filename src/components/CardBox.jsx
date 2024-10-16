import Card from './Card';
import { useData } from '../contexts/DataProvider';
import { Wrapper, CardBoxWrapper, MoveButton, OuterWrapper } from '../styles/Card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { Typography } from '@mui/material';
import ModalMessages from "./ModalMessages.jsx";
import loader from '/assets/loader.gif'

const CardBox = () => {
  const { data, errorMessage } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 6;

  const moveForward = () => {
    if (currentIndex < data.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <OuterWrapper>
      <Typography variant='h5' style={{ margin: '0' }}>My Accounts</Typography>
      { data.length ? (
        <Wrapper>
        <MoveButton onClick={moveBackward}>
          <ArrowBackIosIcon fontSize='large' />
        </MoveButton>
        <CardBoxWrapper>
          {
            data.slice(currentIndex, currentIndex + cardsPerView).map((card) => (
              <Card
                key={card.accountID}
                id={card.accountID}
                title={card.accountName}
                balance={card.balance}
                currency={card.currency}
                type={card.type}
              />
            ))
          }
          {
              errorMessage != '' &&
              <ModalMessages
                  title='No accounts to display.'
                  description='No accounts to display.'
              />
          }
        </CardBoxWrapper>
        <MoveButton onClick={moveForward}>
          <ArrowForwardIosIcon fontSize='large' />
        </MoveButton>
      </Wrapper>
      ): (
      <img src={loader} alt='loading...' style={{
        display: 'block',
        margin: 'auto',
        width: '50px',
        height: '50px',
        marginTop: '20px'
      }}/>
      )}
    </OuterWrapper>
  );
}
export default CardBox;
