import { Vortex } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </SpinnerWrapper>
  );
};
