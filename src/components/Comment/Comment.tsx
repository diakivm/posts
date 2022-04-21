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
      <Card sx={style.card}>
         <CardContent>
            <Typography sx={style.textName} gutterBottom>
               {comment.name}
            </Typography>
            <Typography sx={style.textEmail} gutterBottom>
               {comment.email}
            </Typography>
            <Typography variant="h6" component="div">
               {comment.body}
            </Typography>
         </CardContent>
      </Card >
   )
}


const style = {
   card: {
      bgcolor: '#202020',
   },
   textName: {
      fontSize: 16,
      color: "text.secondary"
   },
   textEmail: {
      fontSize: 12,
      color: "text.secondary"
   },
};
