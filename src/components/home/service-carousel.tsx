"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import {
    Smartphone,
    Megaphone,
    Globe,
    TrendingUp,
    BarChart2,
    ShoppingCart,
} from "lucide-react";


const services = [
    { title: "App Development", link: "/services/app-development", icon: Smartphone, },
    { title: "Ads", link: "/ppc-company-in-india", icon: Megaphone, },
    { title: "Web Development", link: "/services/website-development", icon: Globe, },
    { title: "SEO", link: "/services/seo", icon: TrendingUp, },
    { title: "Digital Marketing", link: "/services/digital-marketing", icon: BarChart2, },
    { title: "Ecommerce Solutions", link: "/services/e-commerce", icon: ShoppingCart, },
];

const ServiceCarousel = () => {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-[90%] mx-auto"
        >
            <CarouselContent className="-ml-5">
                {
                    services.map((service, index) => (
                        <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="border-2 border-[#334155] bg-gradient-to-br from-[#1d2739]/80 to-[#111a2d]/80 backdrop-blur-sm p-5">
                                    <CardContent className="flex gap-5 items-center justify-center py-2 rounded-md border-white">
                                        <service.icon className="text-blue-300 p-2 rounded-md size-9 bg-[#1a2b57]" />
                                        <span className="text-xl font-bold text-accent-darkblue">{service.title}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
        </Carousel>
    )
}

export default ServiceCarousel
