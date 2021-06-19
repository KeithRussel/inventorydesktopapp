const dev = process.env.NODE_ENV !== 'production';
// const staging = process.env.NODE_ENV === 'staging';

const server = dev ? 'http://localhost:5000' : 'http://localhost:5000';

export default server;
