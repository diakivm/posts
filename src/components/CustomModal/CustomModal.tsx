import React, { Dispatch, FC, SetStateAction } from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface ICustomModalProps {
   isOpened: boolean
   onChangeOpened: Dispatch<SetStateAction<boolean>>
   children?: React.ReactNode;
}

export const CustomModal: FC<ICustomModalProps> = ({ isOpened, onChangeOpened, children }) => {

   return (
      <Modal
         open={isOpened}
         onClose={() => onChangeOpened(false)}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            {
               children
            }
         </Box>
      </Modal>
   );
}

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   maxWidth: 600,
   bgcolor: '#282828',
   boxShadow: 24,
   p: 4,
};
