import PropTypes from 'prop-types';

export const User = ({user}) =>{
    return(
        <div className="card">
            <div>
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">City: {user.city}</p>
                <p className="card-text">Country: {user.country}</p>
                <p className="card-text">Favorite Sport: {user.favorite_sport}</p>
            </div>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      favorite_sport: PropTypes.string.isRequired,
    }).isRequired,
};