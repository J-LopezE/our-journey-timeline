const TU_CORREO = 'kracopss@gmail.com';

export const sendDecision = async (decision: 'yes' | 'no'): Promise<void> => {

  const texto = decision === 'yes'
    ? '✅ SÍ — Quiere que continúe la historia ❤️'
    : '❌ NO — Por ahora no 🕊️';

  const fecha = new Date().toLocaleString('es-MX', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
    hour:    '2-digit',
    minute:  '2-digit',
  });

  const response = await fetch(
    `https://formsubmit.co/ajax/${TU_CORREO}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       'application/json',
      },
      body: JSON.stringify({
        Respuesta: texto,
        Fecha:     fecha,
        Proyecto:  'Our Journey Timeline 💌',
        _subject:  `💌 Our Journey — ${decision === 'yes' ? 'SÍ ❤️' : 'NO 🕊️'}`,
        _captcha:  'false',
        _template: 'table',
      }),
    }
  );

  const data = await response.json();

  if (data.success !== 'true' && data.success !== true) {
    throw new Error('FormSubmit falló');
  }
};