import React from 'react';

// import useFetch from '../../hooks/useFetchHook'

// import {Redirect} from 'react-router-dom';
import ArticleForm from '../../components/forms/ArticleForm';
// import {CurrentUserContext} from '../../context/currentUser'

const CreateArticle = ({article}) => {
  // const apiUrl = '/articles';
  // const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState (false);
  // const [{response, error}, doFetch] = useFetch(apiUrl)
  // const [currentUserState] = useContext(CurrentUserContext)

  const onSubmit = article => {
    console.log (article);
    // doFetch({
    //  method: 'post',
    //  data: {
    //   article,
    //  },
    // })
  };

  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: '',
  };

  // useEffect (
  //   () => {
  //     if (!response) {
  //       return;
  //     }
  //     setIsSuccessfullSubmit (true);
  //   },
  //   [response]
  // );

  //na samym pocztaku zanim sie zrenderuje
  // if (currentUserState.isLoggedIn === null) {
  //   return null;
  // }
  // //dopiero teraz sparawdzamy czy zakogowany
  // if (isSuccessfullSubmit || currentUserState.isLoggedIn === false) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        // errors={(error && error.errors) || {}}
      />
    </div>
  );
};
export default CreateArticle;
