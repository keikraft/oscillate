import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div``;

export const UriField: React.FC = () => {
  const [uriValue, setUriValue] = useState('');

  const handleChange = useCallback(event => {
    setUriValue(event.target.value);
  }, []);

  return (
    <FieldWrapper>
      <input type="text" value={uriValue} onChange={handleChange} />
    </FieldWrapper>
  );
};
