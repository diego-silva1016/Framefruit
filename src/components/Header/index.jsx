import { Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Logo from '../../assets/logo.png';
import {
  HeaderContainer,
  UserInfos,
  ActionsContainer,
  ShoppingCartIcon,
} from './styles';
import { useCart } from '../../contexts/cart';

function Header() {
  const { cart } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <UserInfos>
        <img src={user.profileImage} alt="Profile" />
        <div>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      </UserInfos>

      <h1>
        FrameFruit <img src={Logo} alt="Logo" />
      </h1>

      <ActionsContainer>
        <ShoppingCartIcon onClick={() => navigate('/cart')}>
          <Icon>shopping_cart</Icon>
          <div>
            <p>{cart.length}</p>
          </div>
        </ShoppingCartIcon>

        <Icon onClick={signOut}>logout</Icon>
      </ActionsContainer>
    </HeaderContainer>
  );
}

export default Header;
