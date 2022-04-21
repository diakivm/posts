import React, { FC } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { IComment } from '../../models/IComment';



interface ICommentProps {
   comment: IComment
}

export const Comment: FC<ICommentProps> = ({ comment }) => {


   return (
      <Card >
         <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
               {comment.name}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
               {comment.email}
            </Typography>
            <Typography variant="h6" component="div">
               {comment.body}
            </Typography>
         </CardContent>
      </Card>
   )
}
