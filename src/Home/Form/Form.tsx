import { Formik } from "formik";
import { useRecoilState } from "recoil";
import { titleSearch, genreSearch, authorSearch } from "../../atom/store";
import { Input, Button } from "@chakra-ui/react";
import ResetButton from './ResetButton';
//title, author, genre, as search parameters
const Form: React.FC =() => {
    //const [title, setTitle] = useRecoilState(titleSearch);
    const [titleText, setTitleText] = useRecoilState(titleSearch)
    const [genreText, setGenreText] = useRecoilState(genreSearch)
    const [authorText, setAuthorText] = useRecoilState(authorSearch)

  

    return(
        <Formik
        initialValues={{ title: titleText, author: authorText, genre: genreText}}
        onSubmit={(values, {setSubmitting }) => {
            setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
           setTitleText(values.title)
           setGenreText(values.genre)
           setAuthorText(values.author)

        }}
        // onReset={(values, {resetForm}) => {
        //     resetForm()
        //     setTitleText(' ')
        //     setGenreText(' ')
        //    setAuthorText(' ')
        // }}
    >
        {({
            values,
            errors,
            touched, 
            handleChange,
            handleSubmit,
            handleBlur,
            resetForm,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
                <Input
                    type="title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                />
                <Input
                type="author"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                />
                <Input
                type="genre"
                name="genre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.genre}
                />
                <Button type="submit" disabled={isSubmitting}>
                    Search
                </Button>
                <ResetButton />
            </form>
        )}
    </Formik>
    )
}


export default Form;