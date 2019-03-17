import React from 'react';
import { Card } from "semantic-ui-react";

export const IsEmpty = () => {
  return (
    <Card.Content className="content-list">
      <div className="d-flex justify-content-center align-items-center h-100">
        <h3>No Data Found</h3>
      </div>
    </Card.Content>
  )
};
