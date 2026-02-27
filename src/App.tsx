import React, { useState } from 'react';
import './App.css';

function App() {
  const [showConfirm, setShowConfirm] = useState(false);

  const whatsappNumber = '5527997455765';
  const whatsappMessage = 'Olá! Gostaria de confirmar minha presença no 1º aniversário do Arthur!';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Coordenadas do endereço: Avenida José Martins M., Rato, Serra - ES
  const googleMapsLink = 'https://maps.google.com/?q=Avenida+José+Martins+M,+Rato,+Serra,+ES';

  return (
    <div className="container">
      <div className="invite-card">
        {/* Background Image */}
        <div className="invite-background">
          <img src="/convite-bg.png" alt="Convite 1º Aniversário do Arthur" />
        </div>

        {/* Overlay with buttons */}
        <div className="buttons-overlay">
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            title="Confirmar presença via WhatsApp"
          >
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.39 1.242-3.286 2.128-1.797 1.797-2.8 4.194-2.8 6.74 0 1.742.363 3.433 1.08 5.032L2.07 19.775l5.528-1.83c1.47.8 3.159 1.223 4.844 1.223h.004c5.374 0 9.737-4.363 9.737-9.737 0-2.605-.505-5.05-1.504-7.441-.994-2.39-2.431-4.566-4.223-6.358-1.792-1.792-3.968-3.229-6.358-4.223-2.391-.999-4.836-1.504-7.441-1.504z" />
            </svg>
            <span>Confirmar Presença</span>
          </a>

          {/* Google Maps Button */}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-maps"
            title="Ver localização no Google Maps"
          >
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            <span>Ver Localização</span>
          </a>
        </div>
      </div>

      {/* Info Footer */}
      <div className="info-footer">
        <p>Clique nos botões acima para confirmar sua presença ou ver a localização do evento!</p>
      </div>
    </div>
  );
}

export default App;
