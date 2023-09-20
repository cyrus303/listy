// type Props = {
//   movieData: [];
// };

import {Card, Button} from 'react-bootstrap';
import {baseURL} from '../../src/const';

const Cards: React.FC = ({data}) => {
  const {backdrop_path, original_title, overview} = data.results[1];

  return (
    <>
      <Card style={{width: '18rem', border: '1px solid grey'}}>
        <Card.Img
          variant="top"
          src={baseURL + backdrop_path}
          style={{width: '18rem'}}
        />
        <Card.Body>
          <Card.Title>{original_title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
