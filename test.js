// test.js

import React, { useState } from 'react';
import { useEffect } from 'react'; // Duplicate import
import { Link } from 'next/link'; // Incorrect import path for Next.js links

function TestComponent() {
    const [count, setCount] = useState(0);

    // Unused variable
    const unusedVar = 'I am not used';

    // Function without explicit return type
    const increment = () => {
        setCount(count + 1);
    };

    // Non-null assertion
    const handleClick = () => {
        const element = document.getElementById('nonexistent')?.innerText;
        console.log(element); // This will log null if the element doesn't exist
    };

    // Incorrect equality check
    if (count == null) {
        console.log('Count is null or undefined');
    }

    // Unused expression
    count && console.log('Count is truthy');

    // JSX props not sorted
    return (
        <div className="container" id="main" role="main">
            <h1>Test Component</h1>
            <button onClick={increment}>Increment</button>
            <Link href="/about">About</Link>
        </div>
    );
}

// No default export
export { TestComponent };
