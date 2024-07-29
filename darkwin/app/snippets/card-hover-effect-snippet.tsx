import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiLock, PiHeadsetFill, PiShoppingCart, PiTruck, PiDress, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiDress className="w-8 h-8 text-blue-600" /></div>,
        title: "Trendy Collections",
        description:
          "Explore our latest collections featuring the latest and most stylish clothing for every occasion.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Established Stores",
        description:
          "We offer in-person services for wholesalers, visit our stores and shop your heart away.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiShoppingCart className="w-8 h-8 text-blue-600" /></div>,
        title: "Online shopping",
        description:
          "Shop our extensive range of women's clothing online. Enjoy seamless shopping and exclusive offers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiTruck className="w-8 h-8 text-blue-600" /></div>,
        title: "Fast Shipping",
        description:
          "Enjoy fast and reliable shipping on all orders. Track your shipment and get your items quickly.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Secure Payment",
        description:
          "We offer secure payment options to ensure your shopping experience is safe and hassle-free.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Support",
        description:
          "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
     
      },
];
