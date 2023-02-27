import React, { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalUpdate } from "../ModalUpdate";
import { DivTechnology } from "./style";

export function Technology() {
  const { user, modalUp, setModalUp } = useContext(UserContext);
  const { setSelectedTech } = useContext(TechsContext)
  

  const functionsLi = (data) => {
    setModalUp(true)
    setSelectedTech(data)
  }
  
  return (
    <DivTechnology>
      {user.techs?.length > 0 ? (
        <>
          <ul>
            {user.techs.map((tech) => (
              <li key={tech.id}  onClick={() => functionsLi(tech)}>
                <h2>{tech.title}</h2>
                <p>{tech.status}</p>
              </li>
            ))}
          </ul>
          <div>{modalUp && <ModalUpdate />}</div>
        </>
      ) : (
        <p>Nenhuma tecnologia cadastrada</p>
      )}
    </DivTechnology>
  );
}
