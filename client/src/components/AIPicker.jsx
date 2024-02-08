import React from 'react';

import CustomButton from "./CustomButton"; 

const AIPicker = ({prompt, setPrompt, generatingImg, handelSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Ask AI...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Ask AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
            type="outline"
            title="AI Logo"
            handelClick={() => handelSubmit('logo')}
            customStyles="text-xs"
            />

            <CustomButton 
            type="filled"
            title="AI Full"
            handelClick={() => handelSubmit('full')}
            customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker