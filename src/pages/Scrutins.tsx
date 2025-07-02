import React, { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

interface Scrutin {
  id: number;
  title: string;
  starts_at: string;
  ends_at: string;
}

const Scrutins: React.FC = () => {
  const [scrutins, setScrutins] = useState<Scrutin[]>([]);
  const history = useHistory();

  useEffect(() => {
    const fetchScrutins = async () => {
      const response = await fetch("http://localhost:3000/api/v1/scrutins");
      const json = await response.json();
      setScrutins(json.data); 
    };

    fetchScrutins();
  }, []);

  return (
  <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
    <h2>Liste des scrutins</h2>
    {scrutins.map((s) => (
      <div
        key={s.id}
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          maxWidth: "600px"
        }}
      >
        <strong style={{ fontSize: "1.2em" }}>{s.title}</strong>
        <p>
          <strong>Début :</strong> {new Date(s.starts_at).toLocaleString()}
        </p>
        <p>
          <strong>Fin :</strong> {new Date(s.ends_at).toLocaleString()}
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          
          {/* j'ai fait un button pour voir les membres et un autre pour voir les stats */}
          <IonButton
            style={{ flex: 1 }}
            onClick={() => history.push(`/scrutins/${s.id}/members`)}
          >
            Voir membres
          </IonButton>

          <IonButton
            color="secondary"
            style={{ flex: 1 }}
            onClick={() => history.push(`/scrutins/${s.id}/stats`)}
          >
            Voir stats
          </IonButton>
        </div>
      </div>
    ))}
  </div>
);
}

export default Scrutins;
