import { Box, Link, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import CallIcon from "@mui/icons-material/Call"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import { useEffect, useState } from "react"
import { fetchContactSettings } from "../utils/fetchContactSettings"
import type { ContactSettings } from "../types/ContactSettings"

const ContactUsPaperContentItem = (
    props: { icon: React.ReactNode; label: string; value: React.ReactNode }
) => (
    <Stack direction="row" gap={2} alignItems="center" sx={{ width: "100%" }}>
        <Box sx={{ width: 24, display: "flex", justifyContent: "center" }}>
            {props.icon}
        </Box>

        <Typography variant="body1">
            <Box component="span" sx={{ fontWeight: "bold" }}>
                {props.label}
            </Box>{" "}
            : {props.value}
        </Typography>
    </Stack>
)

const ContactUsPaperContent = () => {
    const [contact, setContact] = useState<ContactSettings | null>(null)

    useEffect(() => {
        fetchContactSettings()
            .then(setContact)
            .catch(console.error)
    }, [])

    if (!contact) return null

    const whatsappMessage = encodeURIComponent(
        contact.whatsapp?.defaultMessage ?? ""
    )

    return (
        <Stack justifyContent="center" alignItems="center">
            <Stack direction="column" alignItems="center" gap={2} mb={2}>
                {contact.phone?.dial && (
                    <ContactUsPaperContentItem
                        icon={<CallIcon />}
                        label="Call Us"
                        value={
                            <Link href={`tel:${contact.phone.dial}`}>
                                {contact.phone.display}
                            </Link>
                        }
                    />
                )}

                {contact.whatsapp?.dial && (
                    <ContactUsPaperContentItem
                        icon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
                        label="WhatsApp"
                        value={
                            <Link
                                href={`https://wa.me/${contact.whatsapp.dial}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {contact.whatsapp.display}
                            </Link>
                        }
                    />
                )}

                {contact.email && (
                    <ContactUsPaperContentItem
                        icon={<EmailIcon />}
                        label="Email"
                        value={
                            <Link href={`mailto:${contact.email}`}>
                                {contact.email}
                            </Link>
                        }
                    />
                )}
            </Stack>
        </Stack>
    )
}

const ContactUsPaper = () => (
    <Paper
        variant="outlined"
        sx={{
            p: 3,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
        <ContactUsPaperContent />
    </Paper>
)

export default ContactUsPaper
