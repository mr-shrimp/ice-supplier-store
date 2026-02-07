import { Box, Divider, Link, Stack, Typography, useTheme } from '@mui/material'
import Logo from './Logo'
import projectSettings from '../../project-settings.json'

const navLinkItems = [
  { "Our Products": "#section-our-products" },
  { "Uses": "#section-perfect-for" },
  { "How it Works": "#section-how-it-works" },
  {"Delivery Areas": "#section-delivery-areas"},
  { "Contact Us": "#section-get-in-touch" }
]

const NavLinks = () => {
  return (
    <Stack direction="column" spacing={1} marginInlineStart={2}>
      <Link href="#">Back to Top</Link>
      {navLinkItems.map((item, index) => {
        const [label, href] = Object.entries(item)[0]
        return (
          <Link key={index} href={href}>
            {label}
          </Link>
        )
      })}
    </Stack>
  );
}

const Footer = () => {
  const theme = useTheme()
  return (
    <Box sx={{
      marginBlockStart: "100px",
      backgroundColor: theme.palette.primary.main,
      paddingBlockStart: 5,
      paddingInline: { xs: "15px", sm: "10%", md: "5%", lg: "20%" },
      color: "white",
    }}>
      <Stack gap={2} paddingBlockEnd={5}>
        <Typography fontWeight={500}>Navigation</Typography>
        <NavLinks />
      </Stack>
      <Divider sx={{ backgroundColor: "white", marginBlockStart: "10px" }} />
      <Stack
        marginBlock={3}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack alignItems="center" spacing={0.5}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: '0.85rem',
              letterSpacing: 0.3,
            }}
          >
            Proudly South African
          </Typography>

          <Logo logoSize={30} fontSize={15} />
        </Stack>

        <Typography
          variant="body2"
          marginBlockStart={{ xs: 1, sm: 0 }}
        >
          &copy; {new Date().getFullYear()} {` ${projectSettings.name}. All rights reserved.`}
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer
