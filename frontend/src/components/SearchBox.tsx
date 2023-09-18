import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBox = ({setSearchText}) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSearchText(inputText);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Movie Name"
          aria-label="Movie Name"
          aria-describedby="basic-addon2"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <Button
          type="submit"
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchBox;
