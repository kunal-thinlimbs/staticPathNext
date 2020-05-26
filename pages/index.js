
import axios from 'axios'
import Layout from '../components/user';

export async function getStaticProps() {
 
  const data=await axios.get(`https://jsonplaceholder.typicode.com/users`)
  console.log(data)
  const User =data.data

  return {
    props: {
      User
    }
  };
}

export default ({ User }) => (
  <>
   
    <h1>
      {User.map((item) => (
        <Layout key={item.id} {...item} />
      ))}
    </h1>
  </>
);
