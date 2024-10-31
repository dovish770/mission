import React from 'react';
import { Mission as MissionType } from '../../Models/MissionType/MissionType';
import OneMission from '../OneMission/OneMission';
import './MissionList.css';

interface MissionListProps {
  missions: MissionType[];
  deleteMission: (mission: MissionType) => void; 
}

const MissionList: React.FC<MissionListProps> = ({ missions, deleteMission }) => { 
  return (
    <div className='MissionList'>
      <h2>Missions</h2>
      {missions.map((mission) => {
        return (
          <OneMission key={mission._id} mission={mission} deleteMission={deleteMission}/>
        );
      })}
    </div>
  );
};

export default MissionList;
