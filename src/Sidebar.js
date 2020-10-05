import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import Subscription from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow  title="Trending" Icon={WhatshotIcon}/>
            <SidebarRow  title="Subscription" Icon={Subscription}/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OnDemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More Videos"/>
            <hr/> 
            
        </div>
    )
}

export default Sidebar
