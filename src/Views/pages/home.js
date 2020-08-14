import React from 'react';

import PageHeading from 'Components/container/page-heading';
import CardStack from 'Components/container/card-stack';
import { LargeCard } from 'Components/common/card';
/**
 * Main Page.
 */
function Home() {
  return (
    <div>
      <PageHeading heading="Todo List"></PageHeading>
      <div className="main-content">
        <div className="main-content__container">
          <div className="large__card">
            <LargeCard></LargeCard>
          </div>
          <div className="stack__group">
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
            <div className="stack__item">
              <CardStack></CardStack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
