import { MessageCircle } from 'lucide-react';

function WhatsAppBtn() {
  const whatsappNumber = "919876543210"; 
  const message = "Hello H S Salon, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
      style={{
        position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: '#fff',
        width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center',
        alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', zIndex: 1000, transition: 'transform 0.3s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={32} />
    </a>
  );
}
export default WhatsAppBtn;
