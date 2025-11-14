'use client';
import { useState } from 'react';

interface CounterProps {
    incrementBy: number;
    bgColor: string;
}

export default function Counter ({ incrementBy, bgColor }: CounterProps) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // increment count, reset to 0 if it goes above 10
        const newCount = count + incrementBy;
        setCount(newCount > 10 ? 0 : newCount);
    };

    return (
        <div style = {{margin: '10px'}}>
            <p>Count: {count}</p>
            <button 
                onClick = {handleClick}
                style={{
                    backgroundColor: bgColor,
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Increment by {incrementBy}
            </button>
        </div>
    );
}