import { Formik } from "formik";
//title, author, genre, as search parameters
const Form: React.FC =() => {
    
    return(
        <Formik
        initialValues={{ title: '', author: '', genre: ''}}
        onSubmit={(values, {setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({
            values,
            errors,
            touched, 
            handleChange,
            handleSubmit,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
                <input
                    type="title"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                />
                <input
                type="author"
                name="author"
                onChange={handleChange}
                value={values.author}
                />
                <input
                type="genre"
                name="genre"
                onChange={handleChange}
                value={values.genre}
                />
                <button type="submit" disabled={isSubmitting}>
                    Search
                </button>
            </form>
        )}
    </Formik>
    )
}


export default Form;