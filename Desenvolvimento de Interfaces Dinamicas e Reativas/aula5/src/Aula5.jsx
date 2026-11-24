export default function Aula5() {
    return <p>Aula 5</p>
}

import { useEffect, useState } from "react";
export default function Aula5() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json)
    .then((dados) => setUsuario(dados))
  }, [])

  return <p>{usuario ? usuario.name : 'Nada ainda'}</p>
}