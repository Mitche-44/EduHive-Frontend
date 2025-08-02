import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  rating: z.coerce.number().min(1).max(5),
  text: z.string().min(10),
});

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
  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      rating: 5,
      text: "",
    },
  });

  useEffect(() => {
    axios
      .get("/api/testimonials")
      .then((res) => setTestimonials(res.data.testimonials || []))
      .catch((err) => console.error("Failed to fetch testimonials", err));
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/testimonials", data);
      // toast.success("Testimonial submitted successfully");
      reset();

      const res = await axios.get("/api/testimonials");
      setTestimonials(res.data.testimonials || []);
    } catch (err) {
      console.error("Failed to submit testimonial", err);
      // toast.error("Failed to submit testimonial");
    }
  };

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

      {/* Testimonial Submission Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-muted/30 p-6 rounded-xl shadow mb-12"
      >
        <h2 className="text-xl font-semibold mb-2">Share your testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Your Name" {...register("name")} />
          <Input type="email" placeholder="Your Email" {...register("email")} />
          <Input placeholder="Your Role (e.g., Student)" {...register("role")} />
          <Input
            type="number"
            min={1}
            max={5}
            placeholder="Rating (1-5)"
            {...register("rating")}
          />
        </div>
        <Textarea rows={4} placeholder="Your feedback..." {...register("text")} />
        <Button type="submit">Submit Testimonial</Button>
      </form>

      {testimonials.length === 0 ? (
        <p className="text-center text-muted-foreground">No testimonials available.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <CardContent className="flex flex-col items-center text-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name?.split(" ").map((n) => n[0]).join("")}
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
        </>
      )}
    </div>
  );
}