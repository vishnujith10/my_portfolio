import React from 'react'
import './MyWork.css'
import '../shared/Background.css'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="diagonal-bg"></div>
      <div className="mywork_title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork_container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work_item">
              <div className="work_image_wrapper">
                <img src={work.w_img} alt={work.w_name || "Project image"} />
                <div className="work_overlay">
                  {work.demo_link && (
                    <a href={work.demo_link} className="view_button" target="_blank" rel="noopener noreferrer">View</a>
                  )}
                </div>
              </div>
              <div className="work_info">
                <h3 className="work_name">{work.w_name}</h3>
                <p className="work_description">{work.w_desc}</p>
                {work.code_link && (
                  <a href={work.code_link} className="source_button" target="_blank" rel="noopener noreferrer">Source Code</a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork