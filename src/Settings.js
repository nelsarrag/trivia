import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import TextFieldComp from "./TextFieldComp";
import SelectField from "./SelectField";
import useAxios from "./useAxios";

const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" })

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Something went wrong. Please try again later
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: 'boolean', name: "True or False" },
    ]

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <Typography variant="h2" fontWeight="bold">
                Quiz App
            </Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={response.trivia_categories} label="Category" />
                <SelectField options={difficultyOptions} label="Difficulty" />
                <SelectField options={typeOptions} label="Type" />
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