import Phone from "@/components/Phone";

export default function Home() {
  return (
    <div className="relative xs:pt-28 xs:p-10 ds:p-0 flex ds:flex-row xs:flex-col  w-[100vw] min-h-[100vh] bg-light_grayish_violet justify-center items-center ds:gap-52 xs:gap-14 ">
      {/*plat*/}
      <div className="absolute top-0 ds:-left-10 xs:-left-[50%] rounded-b-full from-gradient_light_magenta bg-gradient-to-bl to-gradient_light_violet xs:w-[100%] xs:h-[60vh] ds:w-[31%] ds:h-[90%]"></div>
      <Phone />
      <div className="flex flex-col ds:items-start xs:items-center gap-10">
        <h1 className="text-very_dark_desaturated_violet font-medium ds:text-5xl xs:text-4xl">
          Simple booking
        </h1>
        <p className="ds:text-start ds:w-[450px] text-dark_grayish_violet xs:w-auto xs:text-center">
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </div>
  );
}
