import webpack from 'webpack';

const config = {

};

if (process.env.NODE_ENV === 'production') {
  console.log('In production mode:');
} else {
  console.log('In development mode:');
}

export default config;
