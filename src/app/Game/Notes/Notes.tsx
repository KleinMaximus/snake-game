import React from 'react';

export interface NotesProps {
  paused?: boolean;
  stopped?: boolean;
}

export const Notes: React.FC<NotesProps> = ({ paused, stopped }) => {
  if (stopped) {
    return null;
  }

  if (paused) {
    return <>Press ENTER for resume</>;
  }

  return <>Press SPACE for pause</>;
};
