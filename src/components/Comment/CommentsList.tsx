import React, { FC } from 'react'

import { IComment } from '../../models/IComment'
import { Loader } from '../Loader/Loader'
import { Comment } from './Comment'

import { Grid } from '@mui/material'



interface ICommentsListProps {
   comments: IComment[]
   isLoading?: boolean
   error?: null | string
}

export const CommentsList: FC<ICommentsListProps> = ({ comments, isLoading = false, error = null }) => {
   return (
      <Grid container spacing={2}>
         {
            isLoading ? <Loader /> :
               comments.map((comment) => (
                  <Grid item key={comment.id}>
                     <Comment comment={comment} />
                  </Grid>
               ))
         }
      </Grid>
   )
}
