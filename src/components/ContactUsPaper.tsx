import { Box, Link, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
import projectSettings from '../../project-settings.json';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const whatsappNumber = projectSettings.contact.whatsapp.number.dial
const whatsappMessage = encodeURIComponent(
    projectSettings.contact.whatsapp.defaultMessage
)

const ContactUsPaperContentItem = (
    props: { icon: React.ReactNode; label: string; value: React.ReactNode }
) => {
    return (
        <Stack
            direction="row"
            gap={2}
            alignItems="center"
            sx={{ width: '100%' }}
        >
            {/* Fixed-width icon container */}
            <Box
                sx={{
                    width: 24,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {props.icon}
            </Box>

            <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 'bold' }}>{props.label}</Box> : {' '}
                {props.value}
            </Typography>
        </Stack>
    )
}


const ContactUsPaperContent = () => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Stack direction="column" alignItems="center" gap={2} mb={2}>
                <ContactUsPaperContentItem
                    icon={<CallIcon />}
                    label="Call Us"
                    value={<Link href={`tel:${projectSettings.contact.phone.dial}`}>{projectSettings.contact.phone.display}</Link>}
                />
                <ContactUsPaperContentItem
                    icon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
                    label="WhatsApp"
                    value={
                        <Link
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {projectSettings.contact.whatsapp.number.display}
                        </Link>
                    }
                />

                <ContactUsPaperContentItem
                    icon={<EmailIcon />}
                    label="Email"
                    value={<Link href={`mailto:${projectSettings.contact.email}`}>{projectSettings.contact.email}</Link>}
                />
            </Stack>
        </Stack>
    );
}

const ContactUsPaper = () => {
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 3,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <ContactUsPaperContent />
        </Paper>
    )
}

export default ContactUsPaper
