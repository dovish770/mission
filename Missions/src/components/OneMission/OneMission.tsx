import React from 'react'
import {Mission} from '../../Models/MissionType/MissionType'
import './OneMission.css'

interface OneMissionProps {
    mission: Mission;
    deleteMission: (mission:Mission) => void;
}

const OneMission: React.FC<OneMissionProps> = ({ mission,deleteMission }) => {
    return (
        <div className='OneMission'>
            <div className='missionDetails'>
                <h3>Name: {mission.name} </h3>
                <h4>Status: {mission.status} </h4>
                <h4>Priority: {mission.priority} </h4>
                <h4>Description: {mission.description} </h4>
            </div>
            <div className='buttons'>
                <button onClick={()=>deleteMission(mission)}>Delete</button>
                <button >Progress</button>
            </div>
        </div>
    )
}

export default OneMission
