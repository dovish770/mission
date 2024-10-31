import React, { useState, useEffect } from 'react';
import './MissionsApp.css';
import { Mission as MissionType } from '../../Models/MissionType/MissionType';
import AddMissionForm from '../AddMissionForm/AddMissionForm';
import { GetMissions, PostMission, DeleteMission } from '../../Server/api_requests';
import MissionList from '../MissionList/MissionList';

const MissionsApp = () => {
  const [missions, setMissions] = useState<MissionType[]>([]);
  const [formMission, setFormMission] = useState({
    name: '',
    status: 'Pending',
    priority: 'High',
    description: '',
  });

  const loadMissions = async () => {
    try {
      const data = await GetMissions();
      setMissions(data);
    } catch (error) {
      console.error("Failed to load missions.");
    }
  };

  useEffect(() => {
    loadMissions();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormMission({ ...formMission, [name]: value });
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formMission.name || !formMission.description) {
      console.error('Please fill in all fields.');
      return;
    }

    try {
      await PostMission(formMission);
      setFormMission({
        name: '',
        status: 'Pending',
        priority: 'High',
        description: '',
      });

      loadMissions();
    } catch (error) {
      console.error('Failed to add mission.');
    }
  };


  const handleDeleteMission = async (mission: MissionType) => {
    try {
      await DeleteMission(mission);
      loadMissions(); 
    } catch (error) {
      console.error('Failed to delete mission.');
    }
  };

  return (
    <div className='MissionsApp'>
      <header>
        <h1>Military Operations Dashboard</h1>
      </header>
      <main className='main-MissionsApp'>
        <AddMissionForm formMission={formMission} handleChange={handleChange} handleSubmit={handleSubmit} />
        <MissionList missions={missions} deleteMission={handleDeleteMission} />
      </main>
    </div>
  );
};

export default MissionsApp;
