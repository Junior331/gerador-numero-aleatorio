import React from "react";
import * as S from "./Style";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <S.Container>
      <S.SubContainer>
        <h1>Numero Alertorio</h1>
        <p>
          <strong>Valor Mínimo:</strong>
          {min}
        </p>
        <p>
          <strong>Valor Máximo:</strong>
          {max}
        </p>

        <p>
          <strong>Valor Escolhido:</strong>
          {aleatorio}
        </p>
      </S.SubContainer>
    </S.Container>
  );
};
// export default function Aleatorio() {
//   let numero = Math.round(Math.random() * 100);
//   return (
//     <div>
//       <h1>Numero Alertorio 1 a 100 = {numero}</h1>
//     </div>
//   );
// }
