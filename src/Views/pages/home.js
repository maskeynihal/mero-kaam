import React, { useEffect } from 'react';
import { GoAlert } from 'react-icons/go';
import { Alert } from 'ui-neumorphism';

import PageHeading from 'Components/container/page-heading';
import CardStack from 'Components/container/card-stack';
import { LargeCard, InputCard } from 'Components/common/card';
import { useModal, useAlert } from 'Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from 'Redux/actions';
import { Modal } from 'Components/common/modal';
import callApi from 'Services/callApi';
import { GET_TODOS_URL } from 'Constants/api';

/**
 * Main Page.
 */
function Home() {
  const { isShowing, toggle } = useModal();
  const modalComponent = useSelector((state) => state.modal.modalComponent);
  const todos = useSelector((state) => state.todos.todos);
  const id = useSelector((state) => state.modal.id);
  const data = getData(id);
  const { alert, handleAlert } = useAlert({});
  const dispatch = useDispatch();

  const getAllTodos = async () => {
    const responseData = await callApi(GET_TODOS_URL);

    if (responseData.error) {
      handleAlert({ message: 'Something went wrong. Please refresh the page again', type: 'error' });
    } else {
      dispatch(todosActions.getTodo(responseData.response.data.todos));
      handleAlert({ message: 'Todos Loaded', type: 'success' });
      setTimeout(() => {
        handleAlert({});
      }, 1000);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const getTodos = () => {
    return todos;
  };

  return (
    <div>
      <PageHeading heading="Todo List"></PageHeading>
      <div className="main-content">
        <div className="main-content__container">
          {alert.message && (
            <div className="alert">
              <Alert type={alert.type} icon={<GoAlert />}>
                {alert.message}
              </Alert>
            </div>
          )}
          <div className="stack__group">
            <div className="stack__item">
              <CardStack data={getTodos()}></CardStack>
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
