import React, { FC } from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { useAction } from '../../hooks/useAction'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { CustomPagination } from '../CustomPagination/CustomPagination'
import { PostList } from './PostList'

export const PaginatedPostList: FC = () => {

   const { posts, current_page, total_pages, isPostsLoading, postsError: error } = useTypeSelector(store => store.posts)
   const { fetchPosts } = useAction()

   const [currentPage, setCurrentPage] = React.useState(current_page)

   React.useEffect(() => {
      fetchPosts(currentPage)
      scroll.scrollToTop()
   }, [currentPage])

   return (
      <>
         <PostList
            posts={posts}
            isLoading={isPostsLoading}
            error={error}
         />
         {
            !isPostsLoading && <CustomPagination
               currentPage={current_page}
               totalPages={total_pages}
               onSetCurrentPage={setCurrentPage}
            />
         }
      </>
   )
}
