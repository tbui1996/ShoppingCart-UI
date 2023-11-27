import { Field, Formik } from "formik";
import { useRecoilState } from "recoil";
import { titleSearch, genreSearch, authorSearch } from "../../atom/store";
import { Input, Button, Text } from "@chakra-ui/react";
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
                <Text>Title:</Text>
                <Field
                    as={Input}
                    id="title"
                    name="title"
                    type="tel"
                    variant='outline'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                />
                <Text>Author:</Text>
                <Field
                    as={Input}
                    id="author"
                    name="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                />
                <Text>Genre:</Text>
                <Field
                    as={Input}
                    id="genre"
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