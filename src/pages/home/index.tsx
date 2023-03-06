import React from 'react';
import Husky from '@/components/Husky';

const Home = ({}) => {
    return (
        <div>
            <Husky scale={1} />
        </div>
    );
};

export async function getStaticProps() {
    return { props: {} };
}

export default Home;
