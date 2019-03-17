import React from 'react';
import { IsError } from "../../components/isError";

export const withMaybe = (conditionalRendering) => Component => props =>
  conditionalRendering(props)
    ? <Component {...props} />
    : <IsError/>;

export const withEither = (conditionalRendering, EitherComponent) => Component => props =>
  conditionalRendering(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />;
