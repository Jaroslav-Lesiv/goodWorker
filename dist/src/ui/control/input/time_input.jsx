import styled from "styled-components";
import React from "react";
import { color, styles } from "../../variables";

import { InputWrapper, InputUI, IconWrapper, HelperText } from "./";

const TimeInputWrapper = styled(InputWrapper)`
  min-width: 95px;
  max-width: 100px;
`;

const TimeInputUI = styled(InputUI)`
  max-width: 90px;
  min-width: 90px;
  margin: 0 5px;
`;

const TimeInput = ({
  error = null,
  helperText = "",
  placeholder = "",
  onChange,
  value,
  icon
}) => (
  <TimeInputWrapper>
    {icon && <IconWrapper> {icon}</IconWrapper>}
    <TimeInputUI
      type={`number`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error || helperText ? (
      <HelperText error={error}>{error || helperText}</HelperText>
    ) : null}
  </TimeInputWrapper>
);

export { TimeInput };
