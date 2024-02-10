import { useEffect } from "react"

const List = ({elements}) => {

  useEffect(() => {
    console.log('Mounted Component');
    return () => console.log('Unmounted Component');
  }, [elements]);

  return (
    <div>
      <ul>{
          elements.map((element, i) => ( <li key={i} >{element}</li> ))
        }
      </ul>
    </div>
  )
}

export default List
