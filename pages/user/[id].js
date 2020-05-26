
import NextLink from 'next/link';
import axios from 'axios'
export async function getStaticProps({ params }) {



    const data=await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  

  return {
    props: {
      user:{
        id:data.data.id,
        name:data.data.name
      }
    }
  };
}

export async function getStaticPaths() {

  const songs3 = await await axios.get(`https://jsonplaceholder.typicode.com/users`)
const songs=songs3.data


return {
    paths: songs.map((song) => ({
      params: {
        id: song.id.toString()
      }
    })),
    fallback: false
  };

}

export default ({ user }) => (
  <div >
    <h1>{user.name}</h1>
    <p >
      {user.name}
    </p>
    
    <NextLink href="/" passHref>
      <button as="a" mt={4} leftIcon="arrow-back">
        Back
      </button>
    </NextLink>
  </div>
);
