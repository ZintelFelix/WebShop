/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../types/Product";

export interface ProductContextProps {
    products: Product[];
    fetchProducts: () => void;
    updateProduct: (updatedProduct: Product) => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
    undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = () => {
        fetch("http://localhost:5254/api/Product")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    };

    const updateProduct = async (updatedProduct: Product) => {
        await fetch(`http://localhost:5254/api/Product/${updatedProduct.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        });
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{ products, fetchProducts, updateProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};
