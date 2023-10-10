'use client'
import { Pizza } from '@/app/Components/Interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PizzaDetailsPage = ({ params }: {
  params: { pizzaId: number };
}) => {

  // router
  const router = useRouter();

  // Pizza
  const [pizza, setPizza] = useState<Pizza | null>(null);

  // gets pizza by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7008/api/Pizzas/GetPizzaById/${params.pizzaId}`);
        const fetchedPizza: Pizza = await response.json();
        setPizza(fetchedPizza);
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchData();
  }, [params.pizzaId]);

  // redirect to update form
  const handleUpdatePizza = () => {
    router.push(`/Pizzas/update/${params.pizzaId}`);
  };

  // deletes pizza by id
  const handleDeletePizza = async () => {
    try {
      if (pizza) {
        const response = await fetch(`https://localhost:7008/api/Pizzas/Delete/${pizza.pizzaId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Pizza deleted successfully!');
          router.push('/Pizzas');
        } else {
          console.error('Failed to delete pizza.');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container ms-ctn mx-auto py-8">
      {pizza ? (
        <div>
          <div className="img-ctn mb-5">
            <img src={pizza.imgPath} alt={pizza.name} />
          </div>
          <h2 className='my-1'>Name: {pizza.name}</h2>
          <p>Description: {pizza.description}</p>
          <p className='my-1'>Price: €{pizza.price}</p>
          <p>Category: {pizza.category.title}</p>
          <div className="btn-ctn">
            <button onClick={handleUpdatePizza} className="btn btn-info mr-2">
              Update
            </button>
            <button onClick={handleDeletePizza} className="btn btn-danger mt-5">
              Delete Pizza
            </button>
          </div>
        </div>
      ) : (
        <p>Not Found...</p>
      )}
    </div>
  )
}

export default PizzaDetailsPage








