import { useEffect, useState } from "react"
import Section from "../Section"
import CustomCard from "../CustomCard"
import ResponsiveCarousel from "../ResponsiveCarousel"
import { fetchProducts } from "../../utils/fetchProducts"
import type { Product } from "../../types/Product"

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
  }, [])

  if (!products.length) return null

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
