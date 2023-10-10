import React, { Suspense } from 'react'
import Allpizzas from './Allpizzas';
import Loader from '../Components/Loaders/Loader';

const PizzaMainPage = () => {
  return (
    <div className="container mx-auto ms-ctn">
      <Suspense fallback={<Loader />}>
        <Allpizzas />
      </Suspense>
    </div>
  );
}

export default PizzaMainPage;

