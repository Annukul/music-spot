import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const getAuthToken = (): string | undefined => {
  const auth = useSelector((state: RootState) => state.auth);
  return auth.token;
};

export default {
  getAuthToken,
};
