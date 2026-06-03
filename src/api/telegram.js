export async function sendTelegramMessage() {

  const TOKEN =
    '8720379192:AAE5UeUxxyvGFVYnI9hKnlPNm9eb_fkXJZ4'

  const CHAT_ID = '5594857511'

  fetch(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: 'TEST ORDER',
      }),
    }
  )

}