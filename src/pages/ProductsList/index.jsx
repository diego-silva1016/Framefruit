import { useState, useMemo } from 'react';
import { Main, ProductContainer } from './styles';
import Input from '../../components/Input';
import dadosMock from '../../mock/dadosMock';
import ProductCard from '../../components/ProductCard';

function ProductList() {
  const [searchText, setSearchText] = useState();

  const productsList = useMemo(
    () =>
      searchText
        ? dadosMock.filter(product =>
            product.name
              .toLocaleUpperCase()
              .includes(searchText.toLocaleUpperCase()),
          )
        : dadosMock,
    [searchText],
  );

  return (
    <Main>
      <h2>Lista de produtos</h2>
      <Input
        id="searchText"
        type="text"
        name="searchText"
        label="Pesquisar produto"
        marginTop="22px"
        onChange={e => setSearchText(e.target.value)}
      />
      <ProductContainer>
        {productsList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
    </Main>
  );
}

export default ProductList;
