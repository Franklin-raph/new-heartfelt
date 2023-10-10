import React from 'react'

const UploadCardCoverNav = ({ sidebar, openSidebar }) => {
  return (
    <div className="upload-card-cover-nav-container">
        <div className='sidebar_nav' ref={sidebar}>
        <i
        className="ri-close-line user_dashboard_toggler close"
        onClick={openSidebar}
      ></i>
            <div className="search-container flex-between g-1">
                <input type="text" placeholder='Search Categories'/>
                <button className='primary-button'>Search</button>
            </div>
            <div className="categories-list">
                <h4>Browse by Categories</h4>
                <ul>
                    <li className='flex-between'>
                        <p>Occasions</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Tone</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Style</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Color</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Theme</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Wording</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Language</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                    <li className='flex-between'>
                        <p>Heartfelt’s Choice</p>
                        <i className="bx bx-chevron-down"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UploadCardCoverNav