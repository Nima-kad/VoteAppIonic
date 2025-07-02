import React, { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";
import { useParams } from "react-router-dom";

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  has_voted: number;
}

const ScrutinDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/scrutins/${id}/members`)
      .then((res) => res.json())
      .then((data) => setMembers(data.data))
      .catch((err) =>
        console.error("Erreur de récupération des membres :", err)
      );
  }, [id]);

 const voter = async (memberId: number) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/scrutins/${id}/members/${memberId}/vote`,
      {
        method: "POST",
      }
    );
    if (res.ok) {
      setMembers((prev) =>
        prev.map((m) => (m.id === memberId ? { ...m, has_voted: 1 } : m))
      );
    }
  } catch (err) {
    console.error("Erreur lors du vote :", err);
  }
};


  return (
    <div style={{ padding: "30px" }}>
      <h2>Liste des membres du scrutin</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              Prénom
            </th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              Nom
            </th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              Date de naissance
            </th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
              État du vote
            </th>
            <th style={{ borderBottom: "1px solid #ccc" }}></th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td>{m.first_name}</td>
              <td>{m.last_name}</td>
              <td>{m.birth_date}</td>
              <td>{m.has_voted ? "A voté" : "Non voté"}</td>
              <td>
                {m.has_voted ? (
                  <strong style={{ color: "green" }}>✔️ A voté</strong>
                ) : (
                  <IonButton size="small" onClick={() => voter(m.id)}>
                    Voter
                  </IonButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrutinDetails;
