// import Drawer from '../components/Drawer';
import useSWR from 'swr';
import server from '../utils/server';
import useRequest from '../utils/useRequest';

const HomeScreen = () => {
  const { data: result, error } = useRequest({
    url: `http://localhost:5000/api/products`,
  });
  // const { data: result, error } = useSWR(`${server}/api/products`);

  if (error) return <div>Failed to load</div>;
  if (!result) return <div>loading...</div>;
  if (result) {
    console.log(result);
  }

  return (
    <>
      <div>Home Screens</div>
      <div>{result ? result.map((item) => <p>{item.name}</p>) : null}</div>
    </>
  );
};

export default HomeScreen;
