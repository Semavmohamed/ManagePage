// import { useQuery } from "@tanstack/react-query";

// async function fetchTestimonials() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=3");
//   return res.json();
// }

// function Testimonials() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["testimonials"],
//     queryFn: fetchTestimonials,
//   });

//   if (isLoading) return <p>جارِ التحميل...</p>;
//   if (error) return <p>حدث خطأ في تحميل البيانات</p>;

//   return (
//     <section className="">
//       <h2 className="">ماذا يقول عملاؤنا؟</h2>
//       <div className="">
//         {data.map((item) => (
//           <div key={item.id} className="">
//             <p className="">"{item.body}"</p>
//             <p className="">- {item.email}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;