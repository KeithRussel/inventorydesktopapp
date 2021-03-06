import server from '../utils/server';
import useRequest from '../utils/useRequest';

import Table from '../components/Table';
import Modal from '../components/Modal';

const HomeScreen = () => {
  // const { data: result, error } = useRequest({
  //   url: `${server}/api/products`,
  // });
  // // const { data: result, error } = useSWR(`${server}/api/products`);

  // if (error) return <div>Failed to load</div>;
  // if (!result) return <div>loading...</div>;
  // if (result) {
  //   console.log(result);
  // }

  return (
    <>
      <div>Home Screens</div>
      <Modal />
      {/* <div>
        {result
          ? result.map((item) => <p key={item.prod_id}>{item.name}</p>)
          : null}
      </div> */}
      <Table />
    </>
  );
};

export default HomeScreen;
