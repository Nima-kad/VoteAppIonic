import { IonButton } from "@ionic/react";
import { useEffect, useState } from "react";
import React from "react";

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

    interface Member {  
        id: number;
        first_name: string;
        last_name: string;
        birth_date: string;
        has_voted: number;
    }


  useEffect(() => {
    // Simulate fetching members from an API
    const fetchMembers = async () => {
      // Replace with actual API call
        const response = await fetch('http://localhost:3000/api/v1/members');
        const dataMembers = await response.json();
        setMembers(dataMembers.data);
    };

    fetchMembers();

  }
    , []);
  
  
  return (
    <div>
      <h1>Members</h1>
      <p>This is the Members component.</p>
        <ul>
            {members.map((member) => (
            <li key={member.id}>
                {member.first_name} {member.last_name} - {member.birth_date} - {member.has_voted ? "Has voted" : <IonButton onClick={() => {
                fetch(`http://localhost:3000/api/v1/members/${member.id}`, {
                  method: "POST" // <-- ici ça devrait être PATCH
                })
                .then(response => response.json())
                .then(data => {
                  console.log("vote registered", data);
                  setMembers(prevMembers => 
                    prevMembers.map(m =>
                      m.id === member.id ? { ...m, has_voted: 1 } : m
                    )
                  );
  })
  .catch(error => console.error("error voting", error));
}}>
  Voter
</IonButton>
}
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Members;