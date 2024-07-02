import PropTypes from 'prop-types';
export function UserDetails ({user}){
    return(
        <div key = {user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                        <h3>{user.age}</h3>
                        <span>{user.id}</span>
                    </div>
    );
}


//type checking for the objects in with proptype. When we have to type check an object we use the 
//shape function to do so.
UserDetails.propTypes = {
    user : PropTypes.shape(
        {
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            email : PropTypes.string.isRequired,
            age : PropTypes.number.isRequired
        }
    )}