import React, { useState, useEffect } from 'react';

import PageHeading from 'Components/container/page-heading';
import CardStack from 'Components/container/card-stack';
import { LargeCard, InputCard } from 'Components/common/card';
import { useModal } from 'Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { ShowTaskModal } from 'Components/common/modal';
import { modalActions } from 'Redux/actions';
import { Modal } from 'Components/common/modal';
/**
 * Main Page.
 */
function Home() {
  const { isShowing, toggle } = useModal();
  const modalComponent = useSelector((state) => state.modal.modalComponent);
  const id = useSelector((state) => state.modal.id);
  const data = getData(id);

  return (
    <div>
      <div>{isShowing ? 'showing' : 'not showing'}</div>
      <PageHeading heading="Todo List"></PageHeading>
      <div className="main-content">
        <div className="main-content__container">
          <div className="large__card">
            <InputCard></InputCard>
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
      <Modal isShowing={isShowing} hide={() => toggle(null, null)}>
        {modalComponent === 'LargeCard' && <LargeCard elevation={0} {...data}></LargeCard>}
        {modalComponent === 'InputCard' && <InputCard></InputCard>}
      </Modal>
    </div>
  );
}

const getData = (id) => {
  return {
    heading: Math.random(),
    author: id
  };
};

export default Home;
