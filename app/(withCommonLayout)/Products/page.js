import { useGetProducts } from "../../../hooks/products.hook";
import ProductCard from "../component/Products/ProductCard";

// const fakeData = [
//   {
//     image:
//       "https://wedevs.com/_ipx/img/logos/user-frontend-logo.png?f=webp&q=100&s=150_35",
//     title: "Mobile App Development",
//     description: "Ultimate Frontend Solution for WordPress",
//     textColor: "text-card2",
//     bgColor: "bg-[#cafbf2]",
//     link: "/Service/app-development",
//   },
//   {
//     image:
//       "https://wedevs.com/_ipx/img/logos/dokan-logo.png?f=webp&q=100&s=121_33",
//     title: "Software Development",
//     description: "Build your dream multi vendor marketplace",
//     textColor: "text-card3",
//     bgColor: "bg-[#c5ebf9]",
//     link: "/Service/software-development",
//   },
//   {
//     image:
//       "https://wedevs.com/_ipx/img/logos/pm-logo.png?f=webp&q=100&s=155_46",
//     title: "Quality Assurance & Testing",
//     description: "Project Management tool for your team",
//     textColor: "text-card4",
//     bgColor: "bg-[#fcdeee]",
//     link: "/Service/qa-testing",
//   },
//   {
//     image:
//       "https://wedevs.com/_ipx/img/wedevs/front-page/erp-logo-color.png?f=webp&q=100&s=145_33",
//     title: "Ui/Ux",
//     description:
//       "Open source ERP solution built specially for small businesses",

//     bgColor: "bg-[#f8fbd5]",
//     textColor: "text-card5",

//     link: "/Service/ui-ux",
//   },
//   {
//     image:
//       "https://wedevs.com/_ipx/img/logos/appsero.png?f=webp&q=100&s=155_34",
//     title: "Digital Marketing",
//     description: "Perfect companion for WordPress developers",
//     bgColor: "bg-[#ddd5fb]",
//     textColor: "text-card6",
//     link: "/Service/digital-marketing",
//   },
// ];

export default function Products() {
  const { data: productData, isLoading, isError } = useGetProducts();
  console.log(productData);

  return (
    <>
      <div className="pt-20">
        <div>
          <div>
            <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
              Products
            </h2>
          </div>
          <div id="service" className="  sm:px-6 md:px-10 bg-[#f6f5fb] w-full">
            <div className="Container  mx-auto flex flex-col justify-center items-center space-y-2 ">
              <h1 className=" font-semibold text-primary lg:text-xl  mt-5 lg:pt-16 pt-5">
                Products
              </h1>
              <p className="text-[#202647] font-bold text-sm md:text-base lg:text-[30px] mx-auto text-center  xl:mb-12">
                Our latest Products
              </p>
              <div className="grid  mx-auto grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 md:gap-8  pt-10 lg:pb-14 pb-10 justify-center items-center">
                {productData?.map((item, index) => (
                  <ProductCard
                    key={index}
                    address={item.link}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
