import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../contexts/auth';
import Header from '../components/Header';

function PrivateRoute({ element }) {
  const { user } = useAuth();

  if (user)
    return (
      <>
        <Header />
        {element}
      </>
    );

  return <Navigate to="/login" replace />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
