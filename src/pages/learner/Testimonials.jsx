import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Alice Njeri",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "EduHive helped me upskill quickly. The learning paths are well structured!",
  },
  {
    name: "John Mwangi",
    role: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 4,
    text: "Great platform for self-paced learning. The quizzes and challenges were spot on.",
  },
  {
    name: "Mariam Kiptoo",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 4,
    text: "Loved the UI and the module structure. Very engaging and user-friendly.",
  },
  {
    name: "Brian Otieno",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    text: "The mentorship track and community really helped me land a role.",
  },
  {
    name: "Faith Chebet",
    role: "Cybersecurity Student",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Everything just works. The paths are clear, and feedback is instant.",
  },
  {
    name: "Kevin Njoroge",
    role: "Mobile Developer",
    image: "https://i.pravatar.cc/150?img=41",
    rating: 4,
    text: "Clean platform with tons of real-world challenges. Highly recommended.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-500" : "text-gray-300"}`}
        fill={i < count ? "#facc15" : "none"}
      />
    ))}
  </div>
);

export default function Testimonials() {
  const perPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / perPage);
  const start = (page - 1) * perPage;
  const currentTestimonials = testimonials.slice(start, start + perPage);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((p) => p + 1);
      handleScroll();
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((p) => p - 1);
      handleScroll();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        What Our Learners Say
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial, index) => (
          <Card key={index} className="p-4 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="flex flex-col items-center text-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-lg font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
              <StarRating count={testimonial.rating} />
              <p className="text-sm text-muted-foreground">{testimonial.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <Button onClick={prevPage} disabled={page === 1}>
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <Button onClick={nextPage} disabled={page === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}
