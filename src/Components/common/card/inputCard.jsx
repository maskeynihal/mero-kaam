import React from 'react';
import PropTypes from 'prop-types';
import { Card as NeuCard, Avatar, Button, TextField, TextArea } from 'ui-neumorphism';
import { AiOutlineSave } from 'react-icons/ai';
import { NoteCard, NoteInput } from 'Components/common/noteCard';
/**
 * Large Card.
 *
 * @param props
 */
function InputCard({ rounded, heading, subHeading, type, dueDate, author, typeColor, description, ...props }) {
  return (
    <React.Fragment>
      <form
        action="
      "
      >
        <NeuCard rounded={rounded} {...props} className="input-card">
          <div className="input-card__container">
            <div className="input-card__topbar">
              <TextField
                rounded={rounded}
                placeholder={'Enter Heading'}
                color={'#cfc'}
                prepend={'Heading'}
                style={{ margin: 0 }}
                className="input-card__heading"
              >
                {type}
              </TextField>
              <Button className="bg-success" rounded onClick={action}>
                <div className="button button__with-icon">
                  <div className="icon button__icon button__icon--right">
                    <AiOutlineSave></AiOutlineSave>
                  </div>
                  <div className="text button__text">Save Task</div>
                </div>
              </Button>
              {/* <Button color={'green'}>Save Task</Button> */}
            </div>
            <div className="input-card__content">
              <div className="input-card__row row-group justify-space-between">
                <TextField
                  rounded={rounded}
                  placeholder={'Enter Tag'}
                  style={{ margin: 0 }}
                  color={'#cfc'}
                  prepend={'Type'}
                  className="TextField-TextField"
                >
                  {type}
                </TextField>
                <TextField
                  rounded={rounded}
                  prepend={'Due Date'}
                  type={'date'}
                  style={{ margin: 0 }}
                  className="input-card__type"
                >
                  {dueDate}
                </TextField>
                <div className="input-card__button input-card__author">
                  <Avatar>{author}</Avatar>
                </div>
              </div>

              <div className="row-group input-card__row justify-space-between">
                <div className="input-card__description">
                  <div className="description">
                    <div className="description__heading">{'Description'}</div>
                    <TextArea
                      autoExpand
                      inputStyles={{ width: '100%' }}
                      className="description__body"
                      placeholder="Add Description"
                      height="80"
                    ></TextArea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NeuCard>
      </form>
    </React.Fragment>
  );
}

InputCard.defaultProps = {
  rounded: true,
  heading: 'Save Task',
  subHeading: 'Grind on 2 days',
  type: 'TODO',
  dueDate: Date.now().toString(),
  author: 'NM',
  typeColor: 'var(--primary)',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae doloremque! Quidem dolores numquam eligendi totam illo sequi alias, labore cumque nostrum. Tempora, illum. Numquam voluptatibus corrupti autem culpa cumque?'
};

InputCard.propTypes = {
  rounded: PropTypes.bool,
  heading: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  subHeading: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dueDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  typeColor: PropTypes.string
};

export default InputCard;
