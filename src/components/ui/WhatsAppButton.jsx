import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919811403097"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[90] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium hover:scale-105 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
