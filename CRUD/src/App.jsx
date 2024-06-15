import { supabase } from "./createClient";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", age: "" });
  const [user2, setUser2] = useState({id:"", name: "", age: "" });



  useEffect(() => {
    fetchUsers();
  }, []);



  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*");

    setUsers(data);
  }

  async function createUsers(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    console.log("submitted");
    await supabase
      .from("users")
      .insert([{ name: user.name, age: parseInt(user.age, 10) }]); // Ensure age is a number
    fetchUsers();
  }
  async function updateuser(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    await supabase
    .from("users")
    .update({ name: user2.name , age: parseInt(user2.age) })
    .eq("id", user2.id);
   
    fetchUsers();

  }


  async function handledelete(userid) {
    await supabase.from("users").delete().eq("id", userid);
    fetchUsers();
  }

  





  function handleinput(event) {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleinput2(event) {
    setUser2((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function edit(id) {
    users.map((user) => {
      if (user.id == id) {
        setUser2({id:user.id, name: user.name, age: user.age });
      }
    });
  }

  console.log(user2);

  



  return (
    <div>
      <form onSubmit={createUsers}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleinput}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleinput}
        />

        <button type="submit">create</button>
      </form>

      <form onSubmit={updateuser}>
        <input
          type="text"
          defaultValue={user2.name}
          name="name"
          onChange={handleinput2}
        />
        <input
          type="number"
          name="age"
          defaultValue={user2.age}
          onChange={handleinput2}
        />

        <button type="submit">Save Changes</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            // eslint-disable-next-line react/jsx-key
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button
                  onClick={() => {
                    handledelete(user.id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    edit(user.id);
                  }}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
