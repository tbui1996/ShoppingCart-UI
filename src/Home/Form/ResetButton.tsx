//ResetButton.tsx
import { Button } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import React from "react";

const ResetButton: React.FC = () => {
  //access formik context to check if the form is dirty.
  const { dirty, resetForm } = useFormikContext();
  return (
    <>
      <Button
        type="submit"
        className="btn btn-primary"
        disabled={!dirty}
        onClick={() => resetForm()}
      >
        Clear All
      </Button>
    </>
  );
};

export default ResetButton;