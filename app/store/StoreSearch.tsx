"use client";
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

export default function StoreSearch(){
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    // Fetch on load
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data));
    }, []);

    //filter by title
    const filtered = products.filter((p) => 
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1>Store</h1>

            <input 
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    border: "2px solid white"
                }}
            />

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={th}>Title</th>
                        <th style={th}>Price</th>
                        <th style={th}>Category</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((product) => (
                        <tr key={product.id}>
                            <td style={td}>{product.title}</td>
                            <td style={td}>${product.price}</td>
                            <td style={td}>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

const th = {
    borderBottom: "2px solid #ccc",
    textAlign: "left" as const,
    padding: "8px",
};
const td = {
    borderBottom: "1px solid #eee",
    padding: "8px",
};