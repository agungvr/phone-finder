import React from "react";
import Masonry from "react-masonry-css";
import { Card } from "semantic-ui-react";
import { withEither, withMaybe } from "../../../app/helpers/renderingHandler";
import { compose } from 'recompose'
import { IsLoading } from "../../../components/isLoading";
import { IsEmpty } from "../../../components/isEmpty";

const Item = ({ item }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Description>
          <span>{item.description}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h4>{item.brand}</h4>
        <div>
          <span>Released {item.release_year}</span>
        </div>
      </Card.Content>
    </Card>
  )
};

const Grid = compose(
  withEither(props => props.fetching, IsLoading),
  withMaybe(props => props.data !== null),
  withEither(props => !props.data.length, IsEmpty),
)(props => {
  return (
    <Masonry
      breakpointCols={{ default: 2 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {
        props.data.map((x, i) => <Item key={i} item={x}/>)
      }
    </Masonry>
  )
});

export const List = props => (
  <div className='list-content'>
    <Grid {...props}/>
  </div>
);
