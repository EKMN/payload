import React from 'react';
import { SetStepNav } from 'payload/components';

import './index.css';

export default props => {
  return (
    <article className="collection-archive">
      <SetStepNav nav={ [
        {
          label: props.collection.attrs.label
        }
      ] } />
      {props.children}
    </article>
  );
};