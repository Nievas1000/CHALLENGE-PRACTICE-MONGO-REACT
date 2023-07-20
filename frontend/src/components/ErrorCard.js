import PropTypes from 'prop-types';

export const ErrorCard = ({ message }) => {
    return (
        <div className='container-error-card'>
            <div className="error-card">
                <p>{message}</p>
            </div>
        </div>
    );
};

ErrorCard.propTypes = {
    message: PropTypes.string,
};
  
