export default function ToastStack({ toasts }) {
  if (!toasts?.length) return null

  return (
    <div className="fixed z-[110] top-20 right-4 sm:right-6 flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="w-80 max-w-[80vw] rounded-3xl border border-beige/70 bg-white shadow-premium p-4"
        >
          <div className="font-semibold text-slate-900">{t.title}</div>
          <div className="text-sm text-slate-700 mt-1">{t.message}</div>
        </div>
      ))}
    </div>
  )
}

