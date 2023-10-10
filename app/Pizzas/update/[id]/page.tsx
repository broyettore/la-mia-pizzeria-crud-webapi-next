'use client'
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Pizza } from '@/app/Components/Interfaces/interfaces';

const UpdatePizzaPage = ({ params}: {params: {id: number}}) => {
  const router = useRouter();

  const [pizza, setPizza] = useState<Pizza>({
    pizzaId: 0,
    name: '',
    imgPath: '',
    description: '',
    price: 0,
    categoryId: 0,
    category: { categoryId: 0, title: '' },
  });

  useEffect(() => {
    const fetchPizzaDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7008/api/Pizzas/GetPizzaById/${params.id}`);
        if (response.ok) {
          const fetchedPizza: Pizza = await response.json();
          setPizza(fetchedPizza);
        } else {
          console.error('Failed to fetch pizza details.');
        }
      } catch (error) {
        console.error('An error occurred while fetching pizza details:', error);
      }
    };

    fetchPizzaDetails();
  }, [params.id]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (params.id) {
        const response = await fetch(`https://localhost:7008/api/Pizzas/Modify/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pizza),
        });

        if (response.ok) {
          console.log('Pizza updated successfully!');
          router.push(`/Pizzas/${params.id}`);
        } else {
          console.error('Failed to update pizza.');
        }
      }
    } catch (error) {
      console.error('An error occurred while updating pizza:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPizza({ ...pizza, [name]: value });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCategory = { ...pizza.category, title: e.target.value };
    setPizza({ ...pizza, category: newCategory });
  };

  return (
    <div className="container mx-auto ms-ctn">
      <h1 className="my-8 font-bold text-2xl">Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-5">
          <label>
            <input type="text" placeholder="Name" name="name" value={pizza.name} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <div className="mb-5">
          <label>
            <input type="text" name="imgPath" placeholder="Image Path" value={pizza.imgPath} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <div className="mb-5">
          <label>
            <input type="text" name="description" placeholder="Description" value={pizza.description} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <div className="mb-5">
          <label>
            <input type="text" name="price" placeholder="Price" value={pizza.price} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <div className="mb-5">
          <label>
            <input placeholder="Category Name" type="text" name="category.title" value={pizza.category.title} onChange={handleCategoryChange} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdatePizzaPage;
