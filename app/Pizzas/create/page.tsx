'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Pizza } from '@/app/Components/Interfaces/interfaces';
import { useRouter } from 'next/navigation';

const CreateProduct: React.FC = () => {
    const router = useRouter();
    const [pizza, setProduct] = useState<Pizza>({
        pizzaId: 0,
        name: '',
        imgPath: '',
        description: '',
        price: 0,
        categoryId: 0,
        category: { categoryId: 0, title: '' },
    });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Perform the POST request
        try {
            const response = await fetch('https://localhost:7008/api/Pizzas/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pizza),
            });

            if (response.ok) {
                setSuccessMessage('Product created successfully!');
                router.push('/Pizzas');
                console.log('Product created successfully!');
            } else {
                console.error('Failed to create product.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({ ...pizza, [name]: value });
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCategory = { ...pizza.category, title: e.target.value };
        setProduct({ ...pizza, category: newCategory });
    };

    return (
        <div className='container mx-auto ms-ctn'>
            <h1 className='my-8 font-bold text-2xl'>Create Product</h1>
            {successMessage && <div className='text-green-600 mb-5'>{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label>
                        <input type="text" placeholder="Name" name="name" value={pizza.name} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label>
                        <input type="text" name="imgPath" placeholder="image Path" value={pizza.imgPath} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label>
                        <input type="text" name="Description" placeholder="description" value={pizza.description} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label>
                        <input type="text" name="Price" placeholder="price" value={pizza.price} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className='mb-5'>
                    <label>
                        <input placeholder="Category name"
                            type="text"
                            name="category.title"
                            value={pizza.category.title}
                            onChange={handleCategoryChange}
                            className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <button type="submit" className='btn btn-primary'>Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;

