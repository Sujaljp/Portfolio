import { useEffect, useState } from 'react';
import {projectsData , projectsNav} from './Data'
import WorkItem from './WorkItem';

const Works = () => {
    const [item, setItem] = useState({name:'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
      if (item.name==="all") {      
        setProjects(projectsData)
      } else {
        let newProject = projectsData.filter((project)=>{
            return project.category == item.name;
        });
        setProjects(newProject)
      }
    }, [item])
    
    const handleClick=(item ,index)=>{
        setItem(item)//e.target.textContent can also be used
        setActive(index)
        console.log(index);
    }

  return (
    <div>
        <div className="work__fitlter">
        {projectsNav.map((item,index)=>{
            return (
                <span className={index===active?"work__item selected":"work__item "} key={index} onClick={()=>{
                    handleClick(item,index);
                }}>
                    {item.name}
                </span>
            )
        })}
    </div>
    <div className="work__container container grid">
        {
            projects.map((item)=>{
                return <WorkItem item={item} key={item.id}/>;
            })
        }
    </div>
    </div>
  )
}

export default Works