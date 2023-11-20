//ResetButton.tsx
import { Button } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { titleSearch, genreSearch, authorSearch } from "../../atom/store";
import React from "react";
import { useRecoilState } from "recoil";

const ResetButton: React.FC = () => {
  //access formik context to check if the form is dirty.
  const [ , setTitleText] = useRecoilState(titleSearch)
  const [ , setGenreText] = useRecoilState(genreSearch)
  const [ , setAuthorText] = useRecoilState(authorSearch)

  const { dirty, resetForm } = useFormikContext();
  const handleClick= () => {
    resetForm();
    setTitleText(' ')
    setGenreText(' ')
    setAuthorText(' ')
  }
  return (
    <>
      <Button
        type="submit"
        className="btn btn-primary"
        disabled={!dirty}
        onClick={() => handleClick()}
      >
        Clear All
      </Button>
    </>
  );
};

export default ResetButton;