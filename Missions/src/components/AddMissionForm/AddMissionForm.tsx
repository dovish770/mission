import React from 'react';
import './AddMissionForm.css';

interface FormMission{
    name:string
    status:string
    priority:string
    description:string
  }

  interface AddMissionFormProps {
    formMission: FormMission
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const AddMissionForm:React.FC<AddMissionFormProps> = ({ formMission, handleChange, handleSubmit }) => {
    return (
        <div className='AddMissionForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' className='input' value={formMission.name} onChange={handleChange}
                />
                <select name="status" className='input' value={formMission.status} onChange={handleChange}>                                                    
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <select name="priority" className='input' value={formMission.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
                <textarea className='input' name='description' id='description' value={formMission.description} onChange={handleChange}/>
                <input type="submit" id='submit' value="Add Mission" />
            </form>
        </div>
    );
};

export default AddMissionForm;
