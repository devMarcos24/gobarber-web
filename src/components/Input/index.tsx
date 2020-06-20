import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ value, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!value);
  }, [value]);

  // setIsField(true);

  return (
    <Container isFocused={isFocused} isField={isField}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
