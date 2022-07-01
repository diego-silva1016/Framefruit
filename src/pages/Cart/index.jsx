import { Button, Icon } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../../components/CartItem';
import { useCart } from '../../contexts/cart';
import GerarPdf from '../../utils/pdf';
import { Main, Container, ItemsContainer, TotalContainer } from './styles';

function Cart() {
  const { cart, resetCart } = useCart();
  const navigate = useNavigate();

  const total = useMemo(() => {
    const sum = cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.valor * currentValue.quantity,
      0,
    );

    return sum.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }, [cart]);

  const finalizarCompra = () => {
    GerarPdf(cart);
    resetCart();
  };

  return (
    <Main>
      <Container>
        <Icon onClick={() => navigate('/')}>arrow_back_ios</Icon>
        <h2>Carrinho</h2>
      </Container>

      {cart.length === 0 && (
        <span>Adicione algum produto ao seu carrinho.</span>
      )}

      <ItemsContainer>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ItemsContainer>

      <TotalContainer>
        <strong>Total</strong>
        <strong>{total}</strong>
      </TotalContainer>

      {cart.length > 0 && (
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={finalizarCompra}
        >
          Finalizar Compra
        </Button>
      )}
    </Main>
  );
}

export default Cart;
