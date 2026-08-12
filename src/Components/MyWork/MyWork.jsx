import React from 'react'
import './MyWork.css'
import '../shared/Background.css'
import mywork_data from '../../assets/mywork_data'
// import arrowIcon from '../../assets/arrow_icon.svg'

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
              <img src={work.w_img} alt={work.w_title || "Project image"} />
              <div className="work_content">
                <p className="work_description">{work.w_desc}</p>
                <div className="work_buttons">
                  <a href={work.demo_link} className="view_button" target="_blank" rel="noopener noreferrer">View</a>
                  <a href={work.code_link} className="source_button" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork