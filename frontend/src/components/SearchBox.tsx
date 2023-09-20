import React, {useState} from 'react';
import {InputGroup, Form, Button} from 'react-bootstrap';

type SearchBoxProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox: React.FC<SearchBoxProps> = ({setSearchText}) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchText(inputText);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
          className="ml-2"
          id="button-addon2"
          style={{marginLeft: '1rem'}}
        >
          Add
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchBox;
