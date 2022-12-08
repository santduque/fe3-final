import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailCard = () => {
  const { id } = useParams();
  const [medico, setmedico] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setmedico((data))
      })
  }, [id])

  return (
    <>
      {
        medico ?
          <section >
            <h1>Sobre el dentista {medico?.name} </h1>
            <div>
              <ul>
                <li>Nombre: {medico.name}</li>
                <li>Telefono: {medico.phone}</li>
                <li>Website: {medico.website}</li>
                <li>Email: {medico.email}</li>
              </ul>
            </div>
          </section>
        : null
      }
    </>
  )
}

export default DetailCard;