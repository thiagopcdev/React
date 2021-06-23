import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render(){
    const poke = this.props.data;
    const {value, measurementUnit: unit} = poke.averageWeight;
    return (
        <a className="poke-container" href={poke.moreInfo} target="_blank" rel='noreferrer' >
          <div className="poke-info">
          <h4>{poke.name}</h4>
          <p>{poke.type}</p>
          <p>Average Weight: {value.toFixed(1) } {unit} </p>
          </div>
          <div>
              <img src={poke.image} alt={poke.name} />  
          </div>
        </a>
    )
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;