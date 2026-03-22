import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const fetchPeople = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/people");
      setPeople(res.data);
    } catch (err) {
      console.error(err);
      alert("Veriler alınamadı ❌");
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Silmek istediğine emin misin?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/people/${id}`);
      fetchPeople();
    } catch (err) {
      console.error(err);
      alert("Silme hatası ❌");
    }
  };

  const handleEdit = async (person) => {
    const newName = prompt("Yeni isim:", person.full_name);
    const newEmail = prompt("Yeni email:", person.email);

    if (!newName || !newEmail) return;

    try {
      await axios.put(`http://localhost:5000/api/people/${person.id}`, {
        full_name: newName,
        email: newEmail,
      });

      fetchPeople();
    } catch (err) {
      console.error(err);
      alert("Güncelleme hatası ❌");
    }
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
                <button onClick={() => handleDelete(p.id)}>Sil</button>
                <button onClick={() => handleEdit(p)}>Düzenle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;