import React from 'react';
import Layout from '../components/layout';

class DevTools extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={'Test'}>
        <div>Dev Tools</div>
      </Layout>
    );
  }
}

export default DevTools;
