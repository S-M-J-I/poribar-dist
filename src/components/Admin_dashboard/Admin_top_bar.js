import React,{useState,useEffect} from 'react'
import * as Fa from 'react-icons/fa'
import Addevent from './Create_event/Addevent'
function Admin_top_bar() {
  const [createEvent, setCreateEvent] = useState(false)
  const [setListener, setSetListener] = useState(false)
  // const [createEvent, setCreateEvent] = useState(false)
  useEffect(() => {
    if (setListener) {
      const checkifclickedoutside = (e) => {
        if (e.target.classList.contains('addeventcontainer')) {
          setCreateEvent(false)
          setSetListener(false)
        }
      }
      document.addEventListener('click', checkifclickedoutside)
      return () => {
        document.removeEventListener('click', checkifclickedoutside)
      }
    }
    if(createEvent){
      setSetListener(true)
    }
  }, [createEvent,setListener])
  return (
    <div className='admin-top-bar d-flex align-items-center justify-content-between w-100'>
      {createEvent ? <Addevent setCreateEvent={setCreateEvent}/> : <></>}
        <div className='admin-top-bar__left'>
            <Fa.FaBars color='black'/>
        </div>
        <div className='admin-top-bar__right'>
            <button className='admin-top-bar__right__button d-flex align-items-center' onClick={()=> setCreateEvent(true)}><Fa.FaPlus />&nbsp;Create Event </button>
        </div>
    </div>
  )
}

export default Admin_top_bar