import React, {
  InputHTMLAttributes,
  StyleHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
// import ReactInputMask from 'react-input-mask';

import { Container, Error } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: StyleHTMLAttributes<HTMLInputElement>;
  // mask?: string;
}

const Input: React.FC<Props> = ({
  name,
  containerStyle = {},
  // mask,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        style={containerStyle}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >
        {/* {mask ? (
          <ReactInputMask
            mask={mask}
            inputRef={inputRef}
            defaultValue={defaultValue}
            {...rest}
          />
        ) : ( */}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {/* )} */}
      </Container>
      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </>
  );
};

export default Input;
