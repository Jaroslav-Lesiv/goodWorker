import styled from "styled-components";
import React from "react";
import { color, styles } from "../../const";
// import Input from '@material-ui/core/Input';

// import TextField from '@material-ui/core/TextField';
const InputUI = styled.input.attrs({})`
  padding: 10px 15px 10px 35px;
  border-radius: 25px;
  min-width: 195px;
  width: 100%;
  border: 1px solid ${color.primary};
  box-shadow: ${styles.boxShadow};
`;

const InputWrapper = styled.fieldset`
  padding: 0 5px;
  margin-bottom: 15px;
  min-width: 250px;
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 8px;
  left: 12px;
`;

const HelperText = styled.p`
  font-size: 12px;
  margin: 0 0 0 15px;
  word-break: break-all;
  color: ${({ error }) => (error ? color.danger : color.help)};
`;

const Input = ({
  type = "text",
  error = null,
  helperText = "",
  placeholder = "",
  onChange,
  value,
  icon
}) => (
  <InputWrapper>
    {icon && <IconWrapper> {icon}</IconWrapper>}
    <InputUI
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      error={error}
    />
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
  </InputWrapper>
);

export { Input, HelperText, IconWrapper,InputWrapper, InputUI };
