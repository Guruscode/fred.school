import LandingLayout from '@/components/layout/LandingLayout';
import Hero from '@/components/landing/Hero';
import Courses from '@/components/landing/Courses';
import JoinCourses from '@/components/landing/JoinCourses';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Testimonials from '@/components/landing/Testimonials';
import MentorsSection from '@/components/landing/Tutors';

export default function HomePage() {
  return (
    <LandingLayout>
      <Navbar />
      <Hero />
      <JoinCourses />
      <Courses />
      <MentorsSection />
   
      <Testimonials />
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
}