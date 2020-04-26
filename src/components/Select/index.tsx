import React from 'react';
import ReactSelect, {Props, StylesConfig} from 'react-select';
import styled from 'styled-components';

import {secondaryColor, primaryColor} from 'components/GlobalStyles';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;
const SelectLabel = styled.label`
  color: ${secondaryColor};
  font-size: 14px;
  margin-bottom: 8px;
`;

const customStyles: StylesConfig = {
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: '32px',
    color: secondaryColor,
    backgroundColor: 'transparent',
    border: `1px solid ${secondaryColor}`,
    borderRadius: '8px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: secondaryColor,
    fontSize: '12px',
    textTransform: 'lowercase',
  }),
  input: (provided: any) => ({
    ...provided,
    color: secondaryColor,
    fontSize: '12px',
    textTransform: 'uppercase',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: secondaryColor,
    fontSize: '12px',
    textTransform: 'lowercase',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: secondaryColor,
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: '4px',
    color: secondaryColor,
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: 'black',
    border: `1px solid ${secondaryColor}`,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused || state.isSelected ? 'rgba(255,255,255, 0.2)' : 'black',
    color: state.isFocused || state.isSelected ? primaryColor : secondaryColor,
    fontSize: '12px',
    textTransform: 'lowercase',
  }),
};

type SelectProps = {
  label: string;
} & Props;

export const Select: React.FC<SelectProps> = ({label, ...rest}) => {
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <ReactSelect
        {...rest}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: secondaryColor,
          },
        })}
      />
    </SelectWrapper>
  );
};
