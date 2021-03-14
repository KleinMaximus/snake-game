import { useSettings } from '../../../services';

export type UseHW = () => number;

export const useHW: UseHW = () => {
  const { scale, size } = useSettings();

  return size * scale + 1;
};
