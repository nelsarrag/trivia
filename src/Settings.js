import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import TextFieldComp from "./TextFieldComp";
import SelectField from "./SelectField";

const Settings = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <Typography variant="h2" fontWeight="bold">
                Quiz App
            </Typography>
            <form onSubmit={handleSubmit}>
                <SelectField label="Category" />
                <SelectField label="Difficulty" />
                <SelectField label="Type" />
                <TextFieldComp /> 
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get started!
                    </Button>
                </Box>
            </form>
        </Fragment>
    )
}

export default Settings;