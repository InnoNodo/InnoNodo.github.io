import React from 'react';
import Layout from '../components/Layout';
import Bio from '../components/Bio';
import SocialNetworks from "../components/SocialNetworks";
import '../index.css';

const Main: React.FC = () => {

    return (
        <Layout>
            <div className="heading">HELLO!</div>
            <Bio />
            <SocialNetworks />
        </Layout>
    );
};

export default Main;
