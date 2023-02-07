import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface IHomeTemplateProps {
}

const HomeTemplate: React.FunctionComponent<IHomeTemplateProps> = (props) => {
  return (
    <>  
        <header>I AM HEAder</header>
        <Outlet/>
        <footer>I am footer</footer>
    </>
  );
};

export default HomeTemplate;
