import React from 'react'
import './RightSidebar.css'
const WidgetTags = () => {

    const tags = ["c",'css','bootstrap','mysql','javascript','jquery','mongoDB','express','nodejs','reactjs','html','php','ruby']
  return (
    <div className='widget-tags'>
   <h3>Watched tags</h3>
   <div className='widget-tags-div'>
    {
        tags.map((tag) => (
             <p key={tag}>{tag}</p>
        ))
            
    }
   </div>
    </div>
  )
}

export default WidgetTags