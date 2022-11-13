import { authService } from '../../../services/auth-service';
import { AppDispatch } from '../../store/store';
import slice from './slices';

const {
  actions: { setAuthToken },
} = slice;

const getAuthTokenThunk =
  ({ id, secret }: { id: string; secret: string }) =>
  async (dispatch: AppDispatch) => {
    const token = await authService
      .getAuthToken({ id, secret })
      .catch((err: { message: any; status: any }) => {
        return err;
      });

    if (!token) return;
    dispatch(setAuthToken(JSON.stringify(token)));
    return token;
  };

const setAuthTokenThunk = (token: string) => (dispatch: AppDispatch) => {
  dispatch(setAuthToken(token));
};

export default { setAuthTokenThunk, getAuthTokenThunk };
