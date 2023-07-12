import React from 'react'
import TVSection from './TVSection'
import WatchEverywhere from './WatchEverywhere'
import KidsProfiles from './KidsProfiles'
import Download from './Download'
import '../stylesheets/ListofOptions.css'


function ListofOptions() {
  return (
      <div className='ListofOptions'>
          <TVSection />
          <WatchEverywhere />
          <KidsProfiles />
          <Download />
    </div>
  )
}

export default ListofOptions