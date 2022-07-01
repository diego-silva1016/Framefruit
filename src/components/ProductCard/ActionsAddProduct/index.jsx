import { Button, Icon } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../../contexts/cart';
import Input from '../../Input';
import { QuantityContainer, Div, Actions } from './styles';

function ActionsAddProduct({ product }) {
  const { addProduct } = useCart();

  const [addInCart, setAddInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const closeAddProduct = () => {
    setAddInCart(false);
    setQuantity(0);
  };

  const addProductInCart = () => {
    addProduct({ ...product, quantity });
    closeAddProduct();
  };

  if (!addInCart)
    return (
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => setAddInCart(true)}
        sx={{
          marginTop: '30%',
          marginRight: '8px',
          width: '100%',
          fontSize: '12px',
        }}
      >
        Adicionar ao carrinho
        <Icon
          sx={{
            marginLeft: '8px',
          }}
        >
          shopping_cart
        </Icon>
      </Button>
    );

  return (
    <Div>
      <QuantityContainer>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={() =>
            quantity > 0 && setQuantity(prevState => prevState - 1)
          }
          sx={{
            marginRight: '8px',
            width: '20%',
            fontSize: '12px',
          }}
        >
          <Icon>remove</Icon>
        </Button>
        <Input
          id="quantity"
          type="number"
          min={0}
          name="quantity"
          label="Quantidade"
          width="50%"
          size="small"
          value={quantity}
          sx={{ background: '#fff' }}
          onChange={e => setQuantity(parseInt(e.target.value, 10))}
        />
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={() => setQuantity(prevState => prevState + 1)}
          sx={{
            marginLeft: '8px',
            width: '20%',
            fontSize: '12px',
          }}
        >
          <Icon>add</Icon>
        </Button>
      </QuantityContainer>
      <Actions>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={closeAddProduct}
          sx={{
            width: '50%',
            fontSize: '12px',
          }}
        >
          Cancelar
        </Button>
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={addProductInCart}
          sx={{
            marginLeft: '8px',
            width: '50%',
            fontSize: '12px',
          }}
        >
          Adicionar
        </Button>
      </Actions>
    </Div>
  );
}

ActionsAddProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ActionsAddProduct;
