```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>      
      <p>The count is: {count}</p>
    </div>
  );
}
```