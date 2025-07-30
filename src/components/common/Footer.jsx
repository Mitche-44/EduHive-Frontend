
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import apiClient from "@/lib/api/client";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showForm, setShowForm] = useState(false); // Toggle form visibility

  const schema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z
      .string()
      .min(9)
      .max(15)
      .regex(/^\+254\d{9}$/, "Phone must be +254XXXXXXXXX"),
    email: z.string().email("Invalid email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("Submitting...");
    try {
      const response = await axios.post("/api/newsletter/subscribe", data);

      if (response.status === 200) {
        setSubmitMessage("✅ Subscribed successfully!");
        reset();
      } else {
        setSubmitMessage("⚠️ Unexpected server response.");
      }
    } catch (error) {
      console.error(error);
      if (error.response?.status === 409) {
        setSubmitMessage("⚠️ Email already subscribed.");
      } else {
        setSubmitMessage("❌ Error subscribing. Try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1A2A44] text-[#005F84] py-6">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        {/* Grid Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gay-y-8 text-sm text-white">

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-3 underline">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-300" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-indigo-300" />
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 underline"
                >
                  +254 700 000 000
                </a>

              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-indigo-300" />
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-300 underline"
                >
                  info@eduhive.com
                </a>

              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/plans" className="hover:text-indigo-300">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-300">Resources</Link></li>
              <li><Link to="/testimonials" className="hover:text-indigo-300">Testimonials</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#"><Facebook className="w-5 h-5 hover:text-indigo-300" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-indigo-300" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-indigo-300" /></a>
              <a href="#"><Linkedin className="w-5 h-5 hover:text-indigo-300" /></a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-indigo-300">
              <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* About and Toggle Newsletter Form */}
        <div className="text-sm text-indigo-200">
          <div className="mb-4">
            <Link to="/" className="text-2xl font-bold text-white">EduHive</Link>
            <p className="mt-2 max-w-xl">
              Taking your first step in tech or elevating your career? EduHive offers a range of courses and resources. Join a vibrant community of learners and leaders.
            </p>
          </div>

          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Hide Newsletter Form" : "Subscribe to Newsletter"}
          </Button>
        </div>

        {/* Conditional Newsletter Form */}
        {showForm && (
          <Card className="bg-gray-800 text-white border border-indigo-700 shadow-none max-w-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg">Subscribe to our Newsletter</CardTitle>
              <p className="text-sm text-white-300">
                Get updates on events, resources, and more!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-900 text-white placeholder:text-indigo-300"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-gray-900 text-white placeholder:text-indigo-300"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-900 text-white placeholder:text-indigo-300"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
                {submitMessage && (
                  <p className={`text-sm ${submitMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        )}

        {/* Copyright */}
        <div className="border-t border-indigo-700 text-center text-xs text-indigo-300 pt-4">
          © {new Date().getFullYear()} EduHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// export default function Footer() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   const schema = z.object({
//     name: z.string().min(2, "Name is required"),
//     phone: z
//       .string()
//       .min(9)
//       .max(15)
//       .regex(/^\+254\d{9}$/, "Phone must be +254XXXXXXXXX"),
//     email: z.string().email("Invalid email"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(schema),
//     mode: "onBlur",
//   });

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setSubmitMessage("Submitting...");

//     try {
//       const response = await axios.post("/api/newsletter/subscribe", data);

//       if (response.status === 200) {
//         setSubmitMessage("✅ Subscribed successfully!");
//         reset();
//       } else {
//         setSubmitMessage("⚠️ Unexpected server response.");
//       }
//     } catch (error) {
//       console.error(error);
//       if (error.response?.status === 409) {
//         setSubmitMessage("⚠️ Email already subscribed.");
//       } else {
//         setSubmitMessage("❌ Error subscribing. Try again.");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <footer className="bg-[#1A2A44] text-[#005F84] py-6">
//       <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
//         {/* Grid Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 text-sm text-white">
//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-3 underline">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center">
//                 <MapPin className="w-4 h-4 mr-2 text-indigo-300" />
//                 <span>Nairobi, Kenya</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="w-4 h-4 mr-2 text-indigo-300" />
//                 <a
//                   href="https://wa.me/254700000000"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-indigo-300 underline"
//                 >
//                   +254 700 000 000
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="w-4 h-4 mr-2 text-indigo-300" />
//                 <a
//                   href="mailto:info@eduhive.com"
//                   className="hover:text-indigo-300 underline"
//                 >
//                   info@eduhive.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Links */}
//           <div>
//             <h4 className="font-semibold mb-3">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/plans" className="hover:text-indigo-300">
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/dashboard" className="hover:text-indigo-300">
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/testimonials" className="hover:text-indigo-300">
//                   Testimonials
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h4 className="font-semibold mb-3">Follow Us</h4>
//             <div className="flex gap-4">
//               <a href="#"><Facebook className="w-5 h-5 hover:text-indigo-300" /></a>
//               <a href="#"><Twitter className="w-5 h-5 hover:text-indigo-300" /></a>
//               <a href="#"><Instagram className="w-5 h-5 hover:text-indigo-300" /></a>
//               <a href="#"><Linkedin className="w-5 h-5 hover:text-indigo-300" /></a>
//             </div>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 className="font-semibold mb-3">Support</h4>
//             <ul className="space-y-2 text-indigo-300">
//               <li>
//                 <Link to="/team" className="hover:text-white">
//                   Our Team
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faqs" className="hover:text-white">
//                   FAQs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/privacy-policy" className="hover:text-white">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms-and-conditions" className="hover:text-white">
//                   Terms & Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* About */}
//         <div className="text-sm text-indigo-200">
//           <div className="mb-4">
//             <Link to="/" className="text-2xl font-bold text-white">
//               EduHive
//             </Link>
//             <p className="mt-2 max-w-xl">
//               Whether you're just starting out in tech or seeking to level up,
//               EduHive provides learning paths, community, and career support to help you thrive.
//             </p>
//           </div>

//           <Button
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
//             onClick={() => setShowForm(!showForm)}
//           >
//             {showForm ? "Hide Newsletter Form" : "Subscribe to Newsletter"}
//           </Button>
//         </div>

//         {/* Newsletter Form */}
//         {showForm && (
//           <Card className="bg-gray-800 text-white border border-indigo-700 shadow-none max-w-xl">
//             <CardHeader>
//               <CardTitle className="text-white text-lg">Subscribe to our Newsletter</CardTitle>
//               <p className="text-sm text-white-300">
//                 Stay updated with the latest news, learning content, and events.
//               </p>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
//                 <div>
//                   <Input
//                     type="text"
//                     placeholder="Your Name"
//                     className="bg-gray-900 text-white placeholder:text-indigo-300"
//                     {...register("name")}
//                   />
//                   {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
//                 </div>
//                 <div>
//                   <Input
//                     type="tel"
//                     placeholder="+254XXXXXXXXX"
//                     className="bg-gray-900 text-white placeholder:text-indigo-300"
//                     {...register("phone")}
//                   />
//                   {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
//                 </div>
//                 <div>
//                   <Input
//                     type="email"
//                     placeholder="Email Address"
//                     className="bg-gray-900 text-white placeholder:text-indigo-300"
//                     {...register("email")}
//                   />
//                   {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
//                 </div>
//                 <Button
//                   type="submit"
//                   className="bg-indigo-600 hover:bg-indigo-700"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Subscribing..." : "Subscribe"}
//                 </Button>
//                 {submitMessage && (
//                   <p className={`text-sm ${submitMessage.includes("Error") || submitMessage.includes("⚠️") ? "text-yellow-400" : "text-green-400"}`}>
//                     {submitMessage}
//                   </p>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//         )}

//         {/* Copyright */}
//         <div className="border-t border-indigo-700 text-center text-xs text-indigo-300 pt-4">
//           © {new Date().getFullYear()} EduHive. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
