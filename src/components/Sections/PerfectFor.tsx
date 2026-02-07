import CustomPaper from "../CustomPaper"
import ResponsiveCarousel from "../ResponsiveCarousel"
import Section from "../Section"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

const items = [
    {
        title: "Restaurants & Bars",
        description : "Keep your drinks cold and your customers happy with our high-quality ice.",
        icon: <RestaurantIcon fontSize="large" />
    },
    {
        title: "Weddings & Events",
        description : "Perfect for keeping your guests cool and your event running smoothly.",
        icon: <CelebrationIcon fontSize="large" />,
    },
    {
        title: "Construction",
        description : "Ideal for keeping materials and equipment cool in demanding environments.",
        icon: <PrecisionManufacturingIcon fontSize="large" />,
    },
    {
        title: "Braais",
        description : "Perfect for keeping your braai guests cool and comfortable.",
        icon: <OutdoorGrillIcon fontSize="large" />,
    },
]

const PerfectFor = () => {
    return (
        <Section title="Perfect For" id="section-perfect-for">
            <ResponsiveCarousel
                items={items}
                renderItem={(item) => (
                    <CustomPaper {...item} />
                )}
            />
        </Section>
    )
}

export default PerfectFor
