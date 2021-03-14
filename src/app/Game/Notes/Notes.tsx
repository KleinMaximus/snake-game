import React from 'react';

import { useSettings } from '../../../services';

export interface NotesProps {
  paused?: boolean;
  stopped?: boolean;
}

export const Notes: React.FC<NotesProps> = ({ paused, stopped }) => {
  const { pauseCode } = useSettings();

  if (stopped) {
    return null;
  }

  if (paused) {
    return <>Press Enter or click Button for resume</>;
  }

  return <>Press {pauseCode} for pause</>;
};
