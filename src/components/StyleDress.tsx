const StyleDress = () => {
  return (
    <section className="StyleDress max-sm:px-4">
      <div className="container bg-[#F2F0F1] p-8 lg:p-12 rounded-xl">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">BROWSE BY RESS STYLE</h1>
        <div className="grid my-8 lg:my-10 gap-5 grid-cols-12">
            <div className="col-span-4 max-md:col-span-12 p-4 rounded-md spans h-[180px] lg:h-[270px] spans_1_bg">
                <h2 className="text-2xl font-semibold">Casual</h2>
            </div>
            <div className="col-span-8 max-md:col-span-12 p-4 rounded-md spans h-[180px] lg:h-[270px] spans_2_bg">
                <h2 className="text-2xl font-semibold">Formal</h2>
            </div>
            <div className="col-span-8 max-md:col-span-12 p-4 rounded-md spans h-[180px] lg:h-[270px] spans_3_bg">
                <h2 className="text-2xl font-semibold">Party</h2>
            </div>
            <div className="col-span-4 max-md:col-span-12 p-4 rounded-md spans h-[180px] lg:h-[270px] spans_4_bg">
                <h2 className="text-2xl font-semibold">Gym</h2>
            </div>
        </div>
      </div>
    </section>
  )
}

export default StyleDress
