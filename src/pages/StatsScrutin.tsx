import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Stats {
  total: number;
  voted: number;
}

const StatsScrutin: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/scrutins/${id}/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data.data))
      .catch((err) => console.error("Erreur récupération stats :", err));
  }, [id]);

  if (!stats) return <div>Chargement des statistiques...</div>;

 return (
  <div
    style={{
      maxWidth: "400px",
      margin: "40px auto",
      padding: "25px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      color: "#333",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "20px", fontWeight: "600", fontSize: "1.8rem" }}>
      Statistiques du scrutin #{id}
    </h2>
    <p style={{ fontSize: "1.1rem", margin: "12px 0" }}>
      <strong>Total inscrits :</strong> {stats.total}
    </p>
    <p style={{ fontSize: "1.1rem", margin: "12px 0" }}>
      <strong>Total votants :</strong> {stats.voted}
    </p>
    <p
      style={{
        fontSize: "1.2rem",
        marginTop: "25px",
        fontWeight: "700",
        color: "#2d7a2d",
      }}
    >
      Taux de participation : {((stats.voted / stats.total) * 100).toFixed(2)}%
    </p>
  </div>
);


};

export default StatsScrutin;
