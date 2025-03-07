import Herosection from "../components/Herosection";
import FeaturedCourses from "../components/FeaturedCourses";

export default function Home() {
  return (
    <div className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
   <Herosection/>
   <FeaturedCourses/>
    
   </div>
  );
}
