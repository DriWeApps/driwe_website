"use client";
import React from "react";

// The required libraries are loaded via CDN to ensure the component is self-contained.
const headContent = `
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ96482LqYw6pA8C11+p+h8D48/x00a747z6D6B4PqDkF2M8p/5/K/32d5A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.tailwindcss.com"></script>
`;

export default function CallToAction() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headContent }} />

      <section
        className="bg-[#fcd129] py-20 px-6 text-center font-[Inter]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who chose DriWe for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-black hover:border-none bg-[#fcd129] text-black shadow-xl hover:bg-yellow-500 hover:text- text-sm px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
              Book Now
            </button>
            <button className="border border-black shadow-xl hover:text-black text-white text-sm px-8 py-3 rounded-lg font-semibold shadow hover:bg-white hover:text-[#fcd129] ">
              Become a Driver
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
