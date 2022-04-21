import React, { FC } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import useFetching from '../../hooks/useFetching';
import commentService from '../../API/commentService';
import Dalay from '../../utils/Dalay';
import { IPost } from '../../models/IPost'
import { IComment } from '../../models/IComment';
import { CommentsList } from '../Comment/CommentsList';



interface IPostProps {
   post: IPost
}

interface IDataState {
   comments: IComment[]
   isWasLoading: boolean
}

export const Post: FC<IPostProps> = ({ post }) => {


   const [isCommentsHide, setIsCommentsHide] = React.useState(false)

   const [data, setData] = React.useState<IDataState>({ comments: [], isWasLoading: false })
   const [fetchComments, isCommentsLoading, errorComments] = useFetching(async () => {
      const response = await commentService.getCommentsByPostId(post.id)
      await Dalay.wait(1)
      setData({ comments: response.data, isWasLoading: true })
   })

   return (
      <Card >
         <CardHeader
            sx={{ paddingBottom: 0 }}
            avatar={
               <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  U
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVertIcon />
               </IconButton>
            }
            title='Username'
         />
         <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
               {post.title}
            </Typography>
            <Typography variant="h5" component="div">
               {post.body}
            </Typography>
         </CardContent>
         {
            !data.isWasLoading && <CardActions sx={{ justifyContent: 'flex-end' }}>
               <LoadingButton
                  size="small"
                  variant='outlined'
                  loading={isCommentsLoading} onClick={fetchComments}
               >
                  Load comments
               </LoadingButton>
            </CardActions>
         }
         {
            data.isWasLoading && <CardContent sx={{ marginLeft: '10%' }}>
               <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                     size="small"
                     variant='outlined'
                     onClick={() => setIsCommentsHide(!isCommentsHide)}
                  >
                     {isCommentsHide ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </Button>
               </CardActions>
               {
                  !isCommentsHide && <CommentsList comments={data.comments} error={errorComments} />
               }
            </CardContent>
         }
      </Card>
   )
}
