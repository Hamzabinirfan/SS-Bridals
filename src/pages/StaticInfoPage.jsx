export default function StaticInfoPage({ title, children }) {
  return (
    <div className="bg-white">
      <div className="bg-beige/25 border-b border-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-xs text-slate-500">Home • {title}</div>
          <h1 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">{title}</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[30px] border border-beige/70 bg-beige/15 p-6 sm:p-8 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

