import { Box, Divider, Typography } from '@mui/material'

interface SectionProps {
    title: string,
    id?: string,
    children?: React.ReactNode
}

const Section = (props: SectionProps) => {
    return (
        <Box component="section" id={props.id} sx={{
            paddingBlock: "30px",
            paddingInline: { xs: "15px", sm: "10%", md: "5%", lg: "20%" },
            paddingBlockStart: "20px",
            textAlign: "center"
        }}>
            <Typography variant='h2' textAlign="center">{props.title}</Typography>
            <Divider variant='middle' />
            <Box justifyContent="center" alignItems="center" marginBlockStart="20px">
                {props.children}
            </Box>
        </Box>
    )
}

export default Section
