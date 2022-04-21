import React, { FC } from 'react'

import { IPost } from '../../models/IPost'
import { Loader } from '../Loader/Loader'
import { Post } from './Post'

import { Grid } from '@mui/material'



interface IPostListProps {
   posts: IPost[]
   isLoading?: boolean
   error?: null | string
}

export const PostList: FC<IPostListProps> = ({ posts, isLoading = false, error = null }) => {
   return (
      <Grid
         container
         spacing={2}
         direction='column'
      >
         {
            isLoading ? <Loader /> :
               posts.map((post) => (
                  <Grid item key={post.id}>
                     <Post post={post} />
                  </Grid>
               ))
         }
      </Grid>
   )
}
