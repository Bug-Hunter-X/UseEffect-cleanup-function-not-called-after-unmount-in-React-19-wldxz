```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounting!');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    console.log('Button clicked!');
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```