import BlogSection from "./components/blog";
import ProductList from "./components/category";
import Hero from "./components/Hero";
import InstaSection from "./components/Insta-section";
import NewArrival from "./components/newarrival";
import TopPicks from "./components/toppicks-section";

export default function Home(){
  return(
    <>
    <Hero/>
    <ProductList/>
    <TopPicks/>
    <NewArrival/>
    <BlogSection/>
    <InstaSection/>
    
    </>

  )
}