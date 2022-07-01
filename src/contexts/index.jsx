import Proptypes from 'prop-types';
import { AuthProvider } from './auth';
import { CartProvider } from './cart';

function ContextsProviders({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}

ContextsProviders.propTypes = {
  children: Proptypes.element.isRequired,
};

export default ContextsProviders;
