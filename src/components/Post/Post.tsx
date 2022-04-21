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
import { IUser } from '../../models/IUser';
import userService from '../../API/userService';



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
      setData({ comments: response.data as IComment[], isWasLoading: true })
   })


   const [user, setUser] = React.useState<IUser>({ username: 'User' } as IUser)
   const [fetchUser, isUserLoading, errorUser] = useFetching(async () => {
      const response = await userService.getUserById(post.userId)
      setUser(response.data as IUser)
   })


   React.useEffect(() => {
      fetchUser()
   }, [])

   return (
      <Card>
         <CardHeader
            sx={style.cardHeader}
            avatar={
               <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {user?.username[0].toUpperCase()}
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVertIcon />
               </IconButton>
            }
            title={user && user?.username}
         />
         <CardContent>
            <Typography sx={style.textTitle} color="text.secondary" gutterBottom>
               {post.title}
            </Typography>
            <Typography variant="h5" component="div">
               {post.body}
            </Typography>
         </CardContent>
         {
            !data.isWasLoading && <CardActions sx={style.cardAction}>
               <LoadingButton
                  size="small"
                  variant='outlined'
                  color='secondary'
                  loading={isCommentsLoading} onClick={fetchComments}
               >
                  Show comments
               </LoadingButton>
            </CardActions>
         }
         {
            data.isWasLoading && <CardContent sx={style.cardContent}>
               <CardActions sx={style.cardAction}>
                  <Button
                     size='small'
                     variant='outlined'
                     color='secondary'
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


const style = {
   cardHeader: {
      paddingBottom: 0
   },
   textTitle: {
      fontSize: 16
   },
   cardAction: {
      justifyContent: 'flex-end'
   },
   cardContent: {
      marginLeft: '10%',
   }
};
