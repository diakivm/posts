import React, { FC } from 'react'

import { PaginatedPostList } from '../../components/Post/PaginatedPostList'
import { CustomModal } from '../../components/CustomModal/CustomModal'

import { Box, Button } from '@mui/material'
import { NewPostForm } from '../../components/Post/NewPostForm'
import { useTypeSelector } from '../../hooks/useTypeSelector'


export const PostsPage: FC = () => {

   const { isAuth } = useTypeSelector(store => store.auth)
   const [isOpenModal, setIsOpenModal] = React.useState(false)

   return (
      <>
         {
            isAuth && <Box sx={style.buttonContainer}>
               <Button
                  size="small"
                  variant='contained'
                  color="secondary"
                  onClick={() => setIsOpenModal(true)}
               >
                  add post
               </Button>
               <CustomModal
                  isOpened={isOpenModal}
                  onChangeOpened={setIsOpenModal}
               >
                  <NewPostForm onCloseModal={setIsOpenModal} />
               </CustomModal>
            </Box>
         }
         <PaginatedPostList />
      </>
   )
}


const style = {
   buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '20px 0'
   },
};