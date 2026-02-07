import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

interface CustomPaperProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const CustomPaper = (props: CustomPaperProps) => {
    return (
        <Paper
            variant='outlined'
            sx={{
                paddingInline: 3,
                paddingBlock: 2,
                width: 300,
                height: {xs: 170, sm: 120},
            }}
        >
            <Stack
                flexDirection={{xs: "column", sm: "row"}}
                alignItems="center"
                gap={2}
                textAlign={{xs: "center", sm: "left"}}
            >
                {props.icon}
                <Stack gap={1}>
                    <Typography variant='h3' fontWeight={600}>
                        {props.title}
                    </Typography>
                    <Typography variant='body2'>
                        {props.description}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default CustomPaper
