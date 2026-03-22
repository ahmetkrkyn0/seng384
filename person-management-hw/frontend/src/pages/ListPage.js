import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const fetchPeople = async () => {
    const res = await axios.get("http://localhost:5000/api/people");
    setPeople(res.data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Silmek istediğine emin misin?")) return;

    await axios.delete(`http://localhost:5000/api/people/${id}`);
    fetchPeople();
  };

  return (
    <div>
      <h2>Kişi Listesi</h2>

      <button onClick={() => navigate("/")}>Yeni Kayıt</button>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Email</th>
            <th>İşlem</th>
          </tr>
        </thead>

        <tbody>
          {people.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.full_name}</td>
              <td>{p.email}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;