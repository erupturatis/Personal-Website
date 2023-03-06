import React from 'react';
import Husky from '@/components/Husky';

const Home = ({}) => {
    return (
        <div>
            <Husky scale={1} />
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
            <div className=" h-96">ceva</div>
        </div>
    );
};

export async function getStaticProps() {
    return { props: {} };
}

export default Home;
