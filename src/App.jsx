import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const user = { name, email };
    console.log(user);

    // data fetching
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User Added SuccessFully!");
          from.reset();
        }
      });
  };

  return (
    <>
      <h2>Simple CRUD Operation</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" placeholder="Enter name" />
        <br />
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
