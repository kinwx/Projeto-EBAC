import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <h2> @{name} </h2>
        <p> {description} </p>
        <div className='videoFooter_music'>
          <p> <MusicNoteIcon className='videoFooter_icon' /> </p>
          <div className='videoFooterMusic_text'>
            <p> {music} </p>
          </div>
        </div>
      </div>
      <img 
        className='videoFooter_record'
        alt='Imagem de um vinil girando.'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
      />
    </div>
  );
}
