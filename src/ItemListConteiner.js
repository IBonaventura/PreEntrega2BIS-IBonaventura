// src/ItemListContainer.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from 'path-to-your-async-mocks';

const ItemListContainer = () => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getItemsByCategory(categoryId);
        setItems(itemsData);
      } catch (error) {
        // Manejar errores de manera adecuada
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>Item List</h1>
      {/* Mostrar la lista de items */}
    </div>
  );
};

export default ItemListContainer;
