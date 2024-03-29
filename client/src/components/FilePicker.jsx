import React from 'react';
import CustomButton from './CustomButton';

import { getContrastingColor } from '../config/helpers';
import { useSnapshot } from 'valtio';
import state from '../store';

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);

  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input 
          id='file-upload'
          type="file"
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])} 
        />
        <label htmlFor="file-upload" className='filepicker-lable'>
          Upload File
        </label>
        <p className={`mt-2 ${getContrastingColor(snap.color)} text-xs truncate`}>
          {file === '' ? "No file Selected" : file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton 
          type="outline"
          title="Logo"
          handelClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handelClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker