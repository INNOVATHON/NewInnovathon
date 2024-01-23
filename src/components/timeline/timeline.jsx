import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import "./timeline.scss"

const timeline = () => {
  return (
    <>
   
    <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background:"orange", color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="10th JAN "
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
         >
      <h1 className="vertical-timeline-element-title">Registration Starts</h1>
      
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'white', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="25th JAN"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      // icon={<WorkIcon />}
         >
          
      <h3 className="vertical-timeline-element-title">Registration Ends</h3>
     
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'orange', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="26 JAN - 27 JAN"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         >
      <h3 className="vertical-timeline-element-title">Idea Evaluation</h3>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'white', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="28 JAN"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         >
      <h3 className="vertical-timeline-element-title">Announcement of Finalists</h3>
      
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'orange', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="29 JAN - 30 JAN"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         >
      <h3 className="vertical-timeline-element-title">INNOVATHON'24 Grand Finale</h3>
      
    </VerticalTimelineElement>
   </VerticalTimeline></>
  )
}

export default timeline
