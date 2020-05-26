
import NextLink from 'next/link';
import axios from 'axios'
const User = ({ id, name, username }) => (
  <div>
    <NextLink href={`/user/[id]`} as={`/user/${id}`} passHref>
     <div> <button style={{color:'red',backgroundColor:'green'}}>
      
          <h1 >
            {name}
          </h1>
          <p >{username}</p>
        
      </button>
      <br/>
      <br/>
      </div>
    </NextLink>
  </div>
);

export default User;
