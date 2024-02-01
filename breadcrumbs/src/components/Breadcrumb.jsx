import { useEffect, useState } from "react";
import { useLocation ,Link} from "react-router-dom"

const pathMapping = {
    '':'Home',
    'products':'Products',
}

const Breadcrumb = () => {
    const {pathname} = useLocation();
    const [paths,setPaths] = useState(['']);
    console.log(pathname)
    useEffect(() => {
        setPaths(pathname.split("/"));
        console.log(pathname.split("/"))
    },[pathname])
  return (
    <div>
        {paths.map((path,index) => {

            if (index == paths.length - 1) {
                return <span key={index}> {path}</span>
            } else {
                return <span key={index} ><Link to={path}>{pathMapping[path]}</Link> / </span>
            }
        }
        )}


    </div>
  )
}

export default Breadcrumb