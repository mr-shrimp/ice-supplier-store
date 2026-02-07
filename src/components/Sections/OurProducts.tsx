import Section from '../Section'
import CustomCard from '../CustomCard'
import ResponsiveCarousel from '../ResponsiveCarousel'

const products = [
  {
    title: "Bagged Ice",
    description: "2kg, 5kg & Bulk",
    image: "/test-image.png",
  },
  {
    title: "Crushed Ice",
    description: "Perfect for drinks and cooling",
    image: "/test-image.png",
  },
  {
    title: "Ice Delivery",
    description: "Fast and reliable delivery service",
    image: "/test-image.png",
  },
]

const OurProducts = () => {
  return (
    <Section title="Our Products" id="section-our-products">
      <ResponsiveCarousel
        items={products}
        renderItem={(product) => (
          <CustomCard {...product} />
        )}
      />
    </Section>
  )
}

export default OurProducts
