import CustomCard from "../CustomCard"
import ResponsiveCarousel from "../ResponsiveCarousel"
import Section from "../Section"

const items = [
    {
        title: "Restaurants & Bars",
        description : "Keep your drinks cold and your customers happy with our high-quality ice.",
        image: "/test-image.png",
    },
    {
        title: "Weddings & Events",
        description : "Perfect for keeping your guests cool and your event running smoothly.",
        image: "/test-image.png",
    },
    {
        title: "Construction",
        description : "Ideal for keeping materials and equipment cool in demanding environments.",
        image: "/test-image.png",
    },
    {
        title: "Braais",
        description : "Perfect for keeping your braai guests cool and comfortable.",
        image: "/test-image.png",
    },
]

const PerfectFor = () => {
    return (
        <Section title="Perfect For" id="perfect-for">
            <ResponsiveCarousel
                items={items}
                renderItem={(item) => (
                    <CustomCard {...item} />
                )}
            />
        </Section>
    )
}

export default PerfectFor
