'use client'
import React, { useEffect, useState } from 'react';
import { Pizza } from '../Components/Interfaces/interfaces';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Allpizzas = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]); // Define pizzas state
    const [searchQuery, setSearchQuery] = useState<string>('');

    const fetchData = async () => {
        try {
            const response = await fetch("https://localhost:7008/api/Pizzas/GetPizzas");
            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`Fetch failed with status ${response.status}`);
            }

            const fetchedPizzas: Pizza[] = await response.json();
            console.log('Pizzas:', fetchedPizzas);
            setPizzas(fetchedPizzas); // Update the state with fetched pizzas

        } catch (error) {
            console.error("Fetch failed:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredPizzas = pizzas.filter(pizza =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
         <SearchBar onSearch={setSearchQuery} />
         <div className="container flex justify-center flex-wrap p-5">
         {filteredPizzas.map((pizza) => (
                <Link href={`/Pizzas/${pizza.pizzaId}`} key={pizza.pizzaId} className='mb-5 mx-3'>
                    <div className={"my-card-container card-" + pizza.pizzaId + "  ms-pop-in"}>
                        <div className="overlay">
                            <div className="items"></div>
                            <div className="items head">
                                <p>{pizza.name}</p>
                                <p className="ms-card-p">{pizza.description}</p>
                                <p className="ms-card-secondary">
                                    Ingredients: Tst.
                                </p>
                                <hr />
                            </div>
                            <div className="items price">
                                <p className="new">€{pizza.price}</p>
                            </div>
                            <div className="items cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span>ORDER NOW</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
         </div>
        </>
    );
}

export default Allpizzas