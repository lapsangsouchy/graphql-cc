import AddClientsModel from '../components/AddClientsModel';
import AddProjectsModel from '../components/AddProjectModal';
import Clients from '../components/Clients';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientsModel />
        <AddProjectsModel />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};
export default Home;
