import slice from './slices';
import selectors from './selectors';
import thunks from './thunks';

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
