import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { Icon } from 'semantic-ui-react'

export const ListItem = compose(
  withState('active', 'setActive', false),
  withHandlers({
    _handleChange: props => () => {
      let newState = !props.active;
      props.handleClick(newState, props.value);
      props.setActive(newState);
    }
  })
)(
  props => {
    return (
      <a onClick={props._handleChange} className={!props.active ? '' : 'selected'} href="#">
        {props.value}
      </a>
    )
  }
);

export const Select = compose(
  withState('showList', 'setShowList', false),
  withState('value', 'setValue', []),
  withHandlers({
    toggleList: props => () => props.setShowList(!props.showList),
    handleItemClick: props => (active, val) => {
      let { value } = props;

      if (active) value = [...value, val];
      else value = value.filter(e => e !== val);

      props.setValue(value)
      props[`getPhone${props.label}Filter`](value);

    }
  })
)(
  props => {
    return (
      <div className="select">

        <a href={'#'} className='w-100' onClick={props.toggleList}>
          <div className="btn-filter">
            <div className="d-flex flex-column ml-3">
              <span className="select_value">
                {props.label}
              </span>
              <span style={{ fontSize: 10 }}>
                {
                  props.filtered[props.label.toLowerCase()].length > 0
                    ?
                    'Filtered'
                    :
                    `All ${props.label}`
                }
              </span>
            </div>
            {
              !props.showList ?
                <Icon name='arrow alternate circle down' size={'large'} className='c-brown'/>
                :
                <Icon name='arrow alternate circle up' size={'large'} className='c-brown'/>
            }
          </div>
        </a>

        <div className={"select_list " + (!props.showList && 'hide')}>
          {
            props.data.map((x, i) =>
              <ListItem key={i} handleClick={props.handleItemClick} value={x}/>
            )
          }
        </div>
      </div>
    )
  }
);
