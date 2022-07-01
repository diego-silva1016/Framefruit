import { FormControl, TextField, InputAdornment, Icon } from '@mui/material';

import PropTypes from 'prop-types';
import { useState } from 'react';

function Input({
  width,
  marginTop,
  type,
  name,
  label,
  errorMessage,
  onChange,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl sx={{ width, marginTop }} variant="outlined">
      <TextField
        type={!showPassword ? type : 'text'}
        onChange={onChange}
        label={label}
        error={!!errorMessage}
        helperText={errorMessage}
        InputProps={{
          endAdornment: type === 'password' && (
            <InputAdornment position="end" style={{ cursor: 'pointer' }}>
              <Icon
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(prevState => !prevState)}
                edge="end"
              >
                {showPassword ? 'visibility_off' : 'visibility'}
              </Icon>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </FormControl>
  );
}

Input.propTypes = {
  width: PropTypes.string,
  marginTop: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  width: '17rem',
  marginTop: '0x',
  label: null,
  errorMessage: null,
};

export default Input;
