function ListGroup() {
  let items = ["NewYork", "San Fransisco", "Tokyo", "Paris", "London"];
  items = [];

  return (
    <>
    <h1>List</h1>
    {items.length ===0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </> 
  );
}

export default ListGroup;
