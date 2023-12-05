// src/ItemDetailContainer.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from 'path-to-your-async-mocks';

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemData = await getItemById(itemId);
        setItem(itemData);
      } catch (error) {
        // Manejar errores de manera adecuada
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      <h1>Item Detail</h1>
      {/* Mostrar detalles del item */}
    </div>
  );
};

export default ItemDetailContainer;
