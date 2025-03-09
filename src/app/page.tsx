import Herosection from "../components/Herosection";
import FeaturedCourses from "../components/FeaturedCourses";
import Stickyxcroll from "@/components/StickyScroll";
import TestinomialsCard from "@/components/TestinomialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Backgroundwavy from "@/components/Backgroundwavy";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <Stickyxcroll />
      <TestinomialsCard />
      <UpcomingWebinars />
      <Backgroundwavy />
    </div>
  );
}
