import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useCart } from '../../contexts/cart';
import { Container, InfosContainer } from './styles';

function CartItem({ item }) {
  const { removeProduct } = useCart();
  const unitValue = item.valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  const total = (item.valor * item.quantity).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <Container>
      <img src={item.image} alt="Fruta" />
      <InfosContainer>
        <strong>Descrição</strong>
        <div>
          <span>Nome</span>
          <strong>{item.name} </strong>
        </div>
        <div>
          <span>Unidades solicitadas</span>
          <strong>{item.quantity} </strong>
        </div>
        <div>
          <span>Valor unitario</span>
          <strong>{unitValue} </strong>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{total} </strong>
        </div>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={() => removeProduct(item.id)}
        >
          Remover item
        </Button>
      </InfosContainer>
    </Container>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
