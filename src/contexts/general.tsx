import React from 'react'
import { ProjectPropp } from '../components/CardProject';


type general = {
  _projects: [];
  _sponsors: [];
  _university: [];
  _team: [];
}

class GeneralProps {
  mountedApp: ((requested: general) => void) | undefined;
}

interface GeneralPropsData extends GeneralProps {
  projects: ProjectPropp[];
  sponsors: object[];
  university: object[];
  team: object[];
}


export const GeneralContext = React.createContext({} as GeneralPropsData);

export function GeneralContextProvider({ children }: { children: React.ReactNode }) {

  const [projects, setProjects] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);
  const [university, setUniversity] = React.useState([]);
  const [team, setTeam] = React.useState([]);

  function mountedApp(requested: general) {
    setProjects(requested._projects);
    setSponsors(requested._sponsors);
    setUniversity(requested._university);
    setTeam(requested._team);
  }


  React.useEffect(() => {
    async function fetchGTACAPI() {
      try {
        const apiAddress = process.env.REACT_APP_API_ADDRESS ? process.env.REACT_APP_API_ADDRESS : '';
        const response = await fetch(apiAddress);
        const json = await response.json();
        if (mountedApp) {
          mountedApp({ _projects: json.projetos, _team: json.team, _sponsors: json.financiers, _university: json.university });
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchGTACAPI();
  }, []);

  return (
    <GeneralContext.Provider value={{ mountedApp, projects, sponsors, university, team }}>
      {children}
    </GeneralContext.Provider>
  )
}

export const useGeneral = () => {
  return React.useContext(GeneralContext);
}
