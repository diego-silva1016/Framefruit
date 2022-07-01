import PropTypes from 'prop-types';
import ActionsAddProduct from './ActionsAddProduct';

import { Container, InfosContainer, PriceContainer } from './styles';

function ProductCard({ product }) {
  const productValue = product.valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <img src={product.image} alt="Fruta" />

      <InfosContainer>
        <PriceContainer>
          <span>{product.name}</span>
          <strong>{productValue} unidade</strong>
        </PriceContainer>

        <ActionsAddProduct product={product} />
      </InfosContainer>
    </Container>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
