import { IonButton } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Bar, BarChart, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

interface Stats {
  total: number;
  voted: number;
}

const StatsScrutin: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<Stats | null>(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/scrutins/${id}/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data.data))
      .catch((err) => console.error("Erreur récupération stats :", err));
  }, [id]);

  if (!stats) return <div>Chargement des statistiques...</div>;

  // Prépare les données pour le graphique
  const data = [
    { name: "Total inscrits", value: stats.total },
    { name: "Total votants", value: stats.voted },
  ];

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

      {/* Graphique bar chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <IonButton onClick={() => history.push("/scrutins")} style={{ marginTop: "20px" }}>
        Retour à l&apos;accueil
      </IonButton>
    </div>
  );
};

export default StatsScrutin;
