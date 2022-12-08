import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false
  const { data } = useContext(ContextGlobal)
  return (
    <div className={`${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <h1>Home</h1>
      <div className='card-grid container'>
        {data.length ?
          data.map(medico => <Card {...medico} key={medico.id} />)
          : null}
      </div>
    </div>
  )
}

export default Home