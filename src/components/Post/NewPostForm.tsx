import React, { Dispatch, FC, SetStateAction } from 'react'

import { Formik } from 'formik'
import * as yup from 'yup';

import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useAction } from '../../hooks/useAction';


interface IInitialValues {
   title: string
   body: string
}

interface INewPostForm {
   onCloseModal?: Dispatch<SetStateAction<boolean>>

}

export const NewPostForm: FC<INewPostForm> = ({ onCloseModal }) => {

   const { user } = useTypeSelector(store => store.auth)
   const { postNewPost } = useAction()

   const validationsScheme = yup.object().shape({
      title: yup.string().min(6, 'Title too small').required('Required'),
      body: yup.string().min(20, 'Body too small').required('Required'),
   });

   const onSubmitPostPost = (values: IInitialValues) => {
      postNewPost(user.id, values.title, values.body)

      if (onCloseModal)
         onCloseModal(false)
   }

   return (
      <Box>
         <Formik
            initialValues={{
               title: '',
               body: ''
            }}
            validateOnBlur
            onSubmit={(values: IInitialValues) => {
               onSubmitPostPost(values)
            }}
            validationSchema={validationsScheme}
         >
            {
               ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, isSubmitting }) => (
                  <>
                     <TextField
                        variant="outlined"
                        label="Title"
                        name="title"
                        type="text"
                        color="success"
                        sx={style.TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        error={touched.title && errors.title ? true : false}
                        helperText={touched.title && errors.title}
                     />
                     <TextField
                        variant="outlined"
                        label="Body"
                        name="body"
                        type="text"
                        color="success"
                        sx={style.TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.body}
                        error={touched.body && errors.body ? true : false}
                        helperText={touched.body && errors.body}
                     />
                     <LoadingButton
                        disabled={!isValid && !dirty && isSubmitting}
                        onClick={() => handleSubmit()}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={style.postButton}
                     >
                        Post
                     </LoadingButton>
                  </>
               )
            }
         </Formik>
      </Box>
   )
}


const style = {
   postButton: {
      width: '100%'
   },
   TextField: {
      marginBottom: '20px',
      width: '100%'
   }
};
