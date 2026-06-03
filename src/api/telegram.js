export async function sendTelegramMessage(message) {

  const TOKEN =
    '8926889014:AAEISNDYzR_cfMr2d1ORh7OaJI3ggFYE4V8'

  const CHAT_ID = '6584093010'

  fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    }
  )

}