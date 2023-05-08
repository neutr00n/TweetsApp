import { Oval } from 'react-loader-spinner';
import { Box } from './Loader.styled';

export const Loader = () => {
  return (
    <Box>
      <Oval
        height={180}
        width={180}
        color="#4fa94d"
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
};
